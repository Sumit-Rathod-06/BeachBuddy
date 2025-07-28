import React from "react";
import Overviewcard from "./Overviewcard";
import { TrendingUp, Clock, Star } from "lucide-react";

const Overview = () => {
  return (
    <div className="grid grid-cols-2 px-20 pb-5 gap-6">
      <div className="bg-white rounded-3xl p-5 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="text-blue-700" />
          <h4 className="text-2xl font-semibold">Live Conditions</h4>
        </div>
        <Overviewcard />
        <Overviewcard />
        <Overviewcard />
        <Overviewcard />
        <Overviewcard />
      </div>
      <div className="w-full h-full bg-white rounded-3xl p-5 flex flex-col justify-start items-start gap-4">
        <div className="flex items-center gap-2">
          <Clock className="text-green-500" />
          <p className="text-2xl font-semibold">Your Ideal Visit Times</p>
        </div>
        <div className="bg-green-100 rounded-2xl px-4 py-3 w-full">
          <div className="flex items-center gap-2">
            <Star className="text-green-500" />
            <p className="text-green-500 text-semibold text-lg">
              Top Recommendation
            </p>
          </div>
          <p className="mt-3">Tomorrow, 9:00AM - 12:00PM</p>
          <p className="text-sm text-gray-500">
            Safe conditions, lifeguards on duty and calm waters
          </p>
        </div>
        <div className="bg-blue-100 rounded-2xl px-4 py-3 w-full">
          <div className="flex items-center gap-2">
            <Clock className="text-blue-500" />
            <p className="text-blue-500 text-semibold text-lg">Also Good</p>
          </div>
          <p className="mt-3">Saturday, 8:00AM - 11:00AM</p>
          <p className="text-sm text-gray-500">
            Weekend family time with good weather
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
