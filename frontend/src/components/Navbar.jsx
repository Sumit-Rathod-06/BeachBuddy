import React,{useState} from "react";
import { Link } from "react-router-dom";
import { MapPin, House, Waves, Info,AlignJustify,X } from "lucide-react";
import Hamburgerhelp from "./Hamburgerhelp";

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
      <div className="hidden md:flex fixed top-0 left-0 w-full z-50 justify-between items-center px-3 py-7 h-12 mb-2 font-(family-name:--font-poppins) bg-white">
        <div className="flex items-center space-x-2 ml-12">
          <Waves className="bg-gradient-to-r from-blue-600 to-blue-400 p-2 text-white rounded-xl h-10 w-10" />
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400 font-semibold">
            BeachBuddy
          </h1>
        </div>
        <div>
          <ul className="flex space-x-6 font-semibold">
            <div className="flex items-center gap-0.5 text-slate-600 hover:text-blue-600">
              <House className="h-5" />
              <li className="text-lg ">
                <Link to="/">Home</Link>
              </li>
            </div>
            <div className="flex items-center gap-0.5 text-slate-600 hover:text-blue-600">
              <MapPin className="h-5 " />
              <li className="text-lg ">
                <Link to="/men">Beaches</Link>
              </li>
            </div>
            <div className="flex items-center gap-0.5 text-slate-600 hover:text-blue-600">
              <Info className="h-5 " />
              <li className="text-lg ">
                <Link to="/women">About</Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="flex items-center space-x-4 mr-6">
          <p className="text-lg text-slate-800 hover:text-blue-600">Sign In</p>
          <button className="p-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:bg-green-600 text-white rounded-2xl cursor-pointer hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
      <div className="md:hidden fixed top-0 left-0 z-50 bg-white flex items-center w-screen justify-between py-2">
        <div className="flex items-center space-x-2 ml-8">
          <Waves className="bg-gradient-to-r from-blue-600 to-blue-400 p-2 text-white rounded-xl h-10 w-10" />
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400 font-semibold">
            BeachBuddy
          </h1>
        </div>
        <div className="mr-5">
            <button onClick={toggleNavbar}>{isOpen ? <X/> : <AlignJustify/>}</button>
        </div>
        {isOpen && <Hamburgerhelp isOpen={isOpen}/>}
      </div>
    </>
  );
};

export default Navbar;
