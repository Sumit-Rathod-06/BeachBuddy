import React from "react";
import { MapPin } from "lucide-react";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Beachtitle = () => {
  const value = 0.66;
  return (
    <div className="flex justify-evenly gap-100 px-4 py-10 bg-blue-600 text-white">
      <div>
        <h3 className="text-4xl font-semibold">Aksa Beach</h3>
        <div className="flex gap-1">
          <MapPin />
          <p>Malad, Mumbai</p>
        </div>
        <div className="flex gap-6 mt-5">
          <p className="bg-slate-400 rounded-2xl p-2 text-sm">
            6:26 PM, Thursday
          </p>
          <p className="bg-slate-400 rounded-2xl p-2 text-sm">
            Monsoon Season
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CircularProgressbar
          className="w-20 h-20 mb-4"
          styles={buildStyles({
            textColor: "black",
            pathColor: "#427bf5",
            trailColor: "white",
          })}
          value={value}
          maxValue={1}
          text={`${value}`}
          strokeWidth={5}
        />
        <p className="font-semibold">Good,Use Caution</p>
        <p>Safety Score</p>
      </div>
    </div>
  );
};

export default Beachtitle;
