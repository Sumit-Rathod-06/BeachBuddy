import React, { useEffect } from "react";
import { useContext } from "react";
import { dataContext } from "../App";

const Oneele = () => {
  const {data} = useContext(dataContext);

  useEffect(() => {
    console.log("OneEle data: ",data);
    window.initMap = initMap;

    const existingScript = document.getElementById("googleMaps");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "googleMaps";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        import.meta.env.VITE_MAPS_JAVASCRIPT_API_KEY
      }&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      if (window.google && window.google.maps) initMap();
    }

    function initMap() {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: data[0].latitude, lng: data[0].longitude }, 
        zoom: 12,
      });

      const locations = [];

      for (const item of data) {
        if (item.latitude && item.longitude) {
          locations.push({
            title: item.name,
            position: { lat: item.latitude, lng: item.longitude },
          });
        }
      }

      locations.forEach(({ title, position }) => {
        new window.google.maps.Marker({
          position,
          map,
          title,
        });
      });
    }
  }, [data]);

  return <div className="bg-gray-500 w-full h-134 rounded-4xl" id="map"></div>;
};

export default Oneele;
