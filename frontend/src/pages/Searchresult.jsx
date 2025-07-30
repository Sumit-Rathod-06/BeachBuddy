import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import Twogrid from "../components/Twogrid";
import { useContext } from "react";
import { dataContext } from "../App";

const Searchresult = ({input}) => {

  const {setData} = useContext(dataContext);

  return (
    <div className="bg-slate-200 font-(family-name:--font-poppins) md:mt-14">
      <Searchbar setData={setData} ipt={input} />
      <Twogrid />
    </div>
  );
};

export default Searchresult;
