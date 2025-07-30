import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import Twogrid from "../components/Twogrid";
import { createContext } from "react";

export const dataContext = createContext();

const Searchresult = () => {
  const [data, setData] = useState([
    {
      address: "Juhu Beach, Maharashtra, India",
      averageRating: 4.2,
      city: "Maharashtra",
      country: "India",
      createdAt: "2025-07-30T13:46:43.341Z",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      latitude: 19.0974187,
      longitude: 72.8264476,
      mainImageUrl:
        "ATKogpe1t1DTXTyMMKzxzTWYM9zJwwG5k6RNfqJrlxN6p_mFOZvS_gA8I8ERG9haxJ9hw2jVz8_RFyyQdE0xNix3Bf_nYVVDAex29hbR49dk_ShvPY4-Xqfm-Tl-MaB8Y-5eWEqSR5Ktw3ngHZt-IodZoy3Fm3Q4cXCwJSPA45TQxsbxMCv54TzMzdyFO6sQFUjDrBN3xDR3GaDW-C_-Ft9ZgQwumbnZQ4wtXY2GRkzHxgViLu_Ns2SDJuffxitjTDiRweKgotLFjsmZqU8yquxwo-6K6B-z_dBJLQnY87OwTAS_0kqWRAWvNst1oXg6ZzU9nb0TSxR54fLAYGjQy1pwuWCMr2ddBnMRyrjPRMIbVHm5IW0GaMj0xDw1xbDGhZYBd9SJudWQt7oYAFIg8QDgBtRgqERUxcZ8Zcarj7gq7NdpATd6eYOGTh9SkX78Gzrbz-L1368tJ88ny9A1EmejK2S1oJ9cnhedc7HqPUsNYzbo3iGgBytYXgJIeqSwgV74DGgihRHfV44DgXi1v8YHc3I5nQn5K4b1fmHabvV-BB35oJixVfSZCbjtFicILgO2BbmnDg",
      name: "Juhu Beach",
      slug: "juhu",
      sourcePlaceId: "ChIJ6W28r5TJ5zsRd3GnoeRgZ9M",
      state: "Maharashtra",
      updatedAt: "2025-07-30T13:46:43.341Z",
      __v: 0,
      _id: "688a224369bb5adfe4b10253",
    },
  ]);

  return (
    <div className="bg-slate-200 font-(family-name:--font-poppins) md:mt-14">
      <Searchbar setData={setData} />
      <dataContext.Provider value={data}>
        <Twogrid />
      </dataContext.Provider>
    </div>
  );
};

export default Searchresult;
