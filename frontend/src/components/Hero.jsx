import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../App";
import axios from "axios";

const Hero = ({ setInput }) => {
  const [ipt, setIpt] = useState("");
  const {setData} = useContext(dataContext);

  const handleclick = async () => {
    setInput(ipt);
    try {
      const res = await axios.get("http://localhost:3000/search", {
        params: { query: ipt },
      });
      console.log("Response from backend:", res.data);
      setData(res.data);
    } catch (err) {
      console.error("Axios error:", err);
    }
  };

  return (
    <div className="mt-8 md:mt-0 relative w-full h-full bg-gradient-to-r from-blue-700 to-blue-800  p-15 flex flex-col justify-center items-center gap-5 text-white">
      <h2 className="text-center text-xl md:text-7xl font-semibold">
        Your Perfect Beach Day,
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-400">
          Predicted!
        </span>
      </h2>
      <p className="text-center text-md md:text-2xl">
        AI-powered beach insights with real-time safety scores, crowd{" "}
        <br hidden md:block /> predictions, and perfect timing recommendations.
      </p>
      <div className="text-center flex justify-center items-center gap-2 md:relative">
        <input
          type="text"
          value={ipt}
          placeholder="Search for a beach..."
          onChange={(e) => setIpt(e.target.value)}
          className="w-50 h-10 md:w-150 md:h-12 bg-white text-slate-500 rounded-xl p-3"
        />
        <Link to='/search'>
          <button
            className="bg-orange-600 hover:bg-orange-800 cursor-pointer md:absolute md:left-125 md:right-0 md:top-1 w-24 h-10 rounded-xl"
            onClick={handleclick}
          >
            Search
          </button>
        </Link>
      </div>
      <div className="hidden md:block absolute left-20 top-10 h-20 w-20 bg-blue-600 rounded-full"></div>
      <div className="hidden md:block absolute left-45 top-70 h-10 w-10 bg-blue-500 rounded-full"></div>
      <div className="hidden md:block absolute left-300 top-22 h-15 w-15 bg-blue-500 rounded-full"></div>
    </div>
  );
};

export default Hero;
