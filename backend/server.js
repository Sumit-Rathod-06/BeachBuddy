import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Beach from "./models/beach.model.js";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config({ path: "./.env" });

const DISTANCE_THRESHOLD_KM = 1;

app.get("/", (req, res) => {
  return res.status(200).send("Hello Beach Buddy!");
});

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
}

app.get("/search", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Search query is required." });
  }

  try {
    const textSearchResponse = await axios.get(
      "https://maps.googleapis.com/maps/api/place/textsearch/json",
      {
        params: {
          query: `beach in ${query}`,
          key: process.env.GOOGLE_API_KEY,
        },
      }
    );

    const searchResults = textSearchResponse.data.results;

    if (!searchResults || searchResults.length === 0) {
      return res
        .status(404)
        .json({ error: "No results found for your query." });
    }

    const canonicalResults = [];
    const processedSlugs = new Set();

    for (const result of searchResults) {
      if (!result.geometry?.location) continue;

      const beachName = result.name || "Unnamed Beach";
      const stopWords =
        /beach|garden|park|koliwada|spot|yoga|chowpatty|mumbai|welcome|to|the/gi;
      const normalizedName = beachName.replace(stopWords, "").trim();
      const slug = normalizedName
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "");

      if (!slug || processedSlugs.has(slug)) {
        continue;
      }

      let existingBeach = await Beach.findOne({ slug: slug });
      if (existingBeach) {
        if (!canonicalResults.some((b) => b.slug === slug)) {
          canonicalResults.push(existingBeach);
        }
        processedSlugs.add(slug);
        continue;
      }

      const isGeospatialDuplicate = canonicalResults.some((canonicalBeach) => {
        const distance = getDistance(
          result.geometry.location.lat,
          result.geometry.location.lng,
          canonicalBeach.latitude,
          canonicalBeach.longitude
        );
        return distance < DISTANCE_THRESHOLD_KM;
      });

      if (isGeospatialDuplicate) {
        console.log(`Skipping geospatial duplicate: ${beachName}`);
        continue;
      }

      console.log(`Creating new canonical beach: ${beachName}`);

      const detailsResponse = await axios.get(
        "https://maps.googleapis.com/maps/api/place/details/json",
        {
          params: {
            place_id: result.place_id,
            fields: "address_components",
            key: process.env.GOOGLE_API_KEY,
          },
        }
      );
      const components = detailsResponse.data.result?.address_components || [];
      let city = "",
        state = "",
        country = "";
      for (const comp of components) {
        const types = comp.types;
        if (types.includes("locality")) city = comp.long_name;
        if (city === "" && types.includes("administrative_area_level_2"))
          city = comp.long_name;
        if (types.includes("administrative_area_level_1"))
          state = comp.long_name;
        if (types.includes("country")) country = comp.long_name;
      }
      if (!city) city = state || "Unknown Location";

      const beachData = {
        sourcePlaceId: result.place_id,
        name: beachName,
        slug: slug,
        address: result.formatted_address || "",
        city: city,
        state: state,
        country: country,
        latitude: result.geometry.location.lat,
        longitude: result.geometry.location.lng,
        averageRating: result.rating || 0,
        mainImageUrl: result.photos?.[0]?.photo_reference || "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };

      const newBeach = await Beach.create(beachData);
      canonicalResults.push(newBeach);
      processedSlugs.add(slug);
    }

    return res.status(200).json(canonicalResults);
  } catch (error) {
    console.error(
      "An error occurred during the search process:",
      error.message
    );
    return res
      .status(500)
      .json({ error: "An internal server error occurred." });
  }
});

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection to database failed!");
    console.error(err);
  });
