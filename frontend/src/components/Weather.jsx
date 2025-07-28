import React from "react";
import Weathercard from "./Weathercard";
import Weathercard2 from "./Weathercard2";

const Weather = () => {
  return (
    <div className="grid grid-cols-2 px-20 pb-5 gap-6">
      <div className="w-full h-105 bg-white rounded-3xl p-5 flex flex-col justify-start items-start gap-4 overflow-y-auto scrollbar-hide">
        <p className="text-2xl font-semibold">24-Hour Forecast</p>
        <Weathercard/>
        <Weathercard/>
        <Weathercard/>
        <Weathercard/>
        <Weathercard/>
        <Weathercard/>
      </div>
      <div className="w-full h-105 bg-white rounded-3xl p-5 flex flex-col justify-start items-start gap-4 overflow-y-auto scrollbar-hide">
        <p className="text-2xl font-semibold">7-Day Forecast</p>
        <Weathercard2/>
        <Weathercard2/>
        <Weathercard2/>
        <Weathercard2/>
        <Weathercard2/>
        <Weathercard2/>
        <Weathercard2/>
      </div>
    </div>
  );
};

export default Weather;
