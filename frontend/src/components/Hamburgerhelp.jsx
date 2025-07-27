import React from "react";
import {House,MapPin,Info} from "lucide-react"
import {Link} from "react-router-dom"

const Hamburgerhelp = ({isOpen}) => {
  return (
    <div className={`fixed top-14 right-0 transition-transform duration-500 ease-in-out w-[250px] bg-white/30 backdrop-blur-md h-screen z-50  p-5  ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <ul className="flex flex-col space-x-6 gap-3 font-semibold">
        <div className="flex items-center gap-0.5 text-black hover:text-blue-600">
          <House className="h-5" />
          <li className="text-lg ">
            <Link to="/">Home</Link>
          </li>
        </div>
        <div className="flex items-center gap-0.5 text-black hover:text-blue-600">
          <MapPin className="h-5 " />
          <li className="text-lg ">
            <Link to="/men">Beaches</Link>
          </li>
        </div>
        <div className="flex items-center gap-0.5 text-black hover:text-blue-600">
          <Info className="h-5 " />
          <li className="text-lg ">
            <Link to="/women">About</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Hamburgerhelp;
