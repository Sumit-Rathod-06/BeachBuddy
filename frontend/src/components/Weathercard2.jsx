import React from "react";
import { CloudRainWind } from "lucide-react";

const Weathercard2 = () => {
  return (
    <div className="w-full bg-slate-200 rounded-xl py-2 px-3 flex justify-between items-center">
      <div className="flex justify-start items-center gap-3">
        <div>
          <CloudRainWind className="text-blue-900" />
        </div>
        <div>
          <p>Monday</p>
          <p className="text-sm text-slate-600">Partly Cloudy</p>
        </div>
      </div>
      <div>
        <p>25&deg; / 21&deg;</p>
      </div>
    </div>
  );
};

export default Weathercard2;
