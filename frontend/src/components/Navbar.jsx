import React, { useState } from "react";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="w-full h-16 z-10 bg-gray-50 fixed drop-shadow-lg flex justify-between items-center px-4">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 mr-2 object-contain sm:ml-0 md:ml-0 lg:ml-10"
          />
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand.</h1>
          <ul className="hidden md:flex">
            <li className="p-4">Home</li>
            <li className="p-4">About</li>
            <li className="p-4">Support</li>
            <li className="p-4">Platforms</li>
            <li className="p-4">Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden">
          {/* <img src={menu} alt="menu" className="w-5 object-contain mr-3" /> */}
          <img
            src={!menuOpen ? menu : close}
            alt="menu"
            className="w-5 object-contain mr-3"
            onClick={toggleMenu}
          />
        </div>
      </div>
      <ul
        className={
          menuOpen
            ? "absolute z-10 bg-gray-100 w-full mt-16 px-8 md:hidden"
            : "hidden"
        }
      >
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Support</li>
        <li className="p-4">Platforms</li>
        <li className="p-4">Pricing</li>
        <div className="md:hidden flex flex-col my-4">
          <button className="border-none bg-transparent text-black mr-4 mb-4 mt-4">
            Sign In
          </button>
          <button className="px-8 py-3  bg-gray-300 rounded-2xl">
            Sign Up
          </button>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
