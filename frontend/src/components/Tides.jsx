import React from "react";
import Tidecard from "./Tidecard";
import Tidegrid from "./Tidegrid";
import { Sun } from "lucide-react";

const Tides = () => {
  return (
    <div className="grid grid-cols-2 px-35 pb-5 gap-6">
      <div className="w-full h-105 bg-white rounded-3xl p-5 flex flex-col justify-start items-start gap-4 overflow-y-auto scrollbar-hide">
        <p className="text-2xl font-semibold">24-Hour Tide Chart</p>
        <Tidecard />
        <Tidecard />
        <Tidecard />
        <Tidecard />
      </div>
      <div className="w-full h-105 bg-white rounded-3xl p-5 flex flex-col justify-start items-start gap-4 overflow-y-auto scrollbar-hide">
        <p className="text-2xl font-semibold">Surf Report</p>
        <Tidegrid />
        <hr className="w-full" />
        <div className="bg-slate-200 w-full flex justify-between items-center rounded-xl px-3 py-2 font-medium">
          <div className="flex justify-start items-center gap-2">
            <Sun className="text-yellow-500"/>
            <p>Sunrise</p>
          </div>
          <p>6:05 AM</p>
        </div>
        <div className="bg-slate-200 w-full flex justify-between items-center rounded-xl px-3 py-2 font-medium">
          <div className="flex justify-start items-center gap-2">
            <Sun className="text-yellow-500"/>
            <p>Sunrise</p>
          </div>
          <p>6:05 AM</p>
        </div>
      </div>
    </div>
  );
};

export default Tides;
