import mongoose from "mongoose";

const BeachSchema = new mongoose.Schema(
  {
    sourcePlaceId: { type: String, index: true },
    name: {
      type: String,
      required: [true, "Beach name is required."],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Beach address is required."],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "URL slug is required."],
      unique: true,
      lowercase: true,
    },
    description: { type: String, required: [true, "Description is required."] },
    mainImageUrl: { type: String, required: false },
    city: { type: String, required: true, index: true },
    state: { type: String, required: true, index: true },
    country: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    averageRating: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Beach = mongoose.model("Beach", BeachSchema);
export default Beach;
