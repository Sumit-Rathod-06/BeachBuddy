import React, { useState } from "react";
import axios from "axios"

const Searchbar = ({ setData,ipt }) => {
  const [input, setInput] = useState(ipt || "");

  const handleclick = async () => {
    try {
      const res = await axios.get("http://localhost:3000/search", {
        params: { query: input },
      });
      console.log("Response from backend:", res.data);
      setData(res.data);
    } catch (err) {
      console.error("Axios error:", err);
    }
  };

  return (
    <div className="flex justify-center items-center py-5 md:mt-0 mt-15">
      <input
        type="text"
        placeholder="Search perfect beach for you..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-80 md:w-full h-10 ml-40 md:ml-20 mr-2 md:mr-5 bg-gray-500 rounded-xl p-4 text-white focus:outline focus:outline-black"
      />
      <button
        className="bg-blue-500 rounded-xl p-2 text-white mr-40 cursor-pointer hover:bg-blue-600"
        onClick={handleclick}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
