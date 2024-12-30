import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 flex justify-center items-center flex-wrap bg-opacity-50 bg-black p-4 rounded-xl shadow-lg max-w-2xl w-full backdrop-blur-md z-50 rounded-3xl">
      <div className="lg:hidden">
        <Button onClick={toggleMenu} className="text-gray-300 text-2xl bg-transparent shadow-none hover:bg-transparent">
          {isOpen ? <FaTimes /> : <FaBars />}
        </Button>
      </div>
      <div className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"} w-full lg:w-auto`}>
        <Link to="/" onClick={closeMenu} className="block lg:inline-block text-gray-300 text-base font-medium no-underline p-2.5 rounded-lg transition duration-300 hover:bg-gray-800 hover:text-white active:bg-gray-900 active:text-white">
          Home
        </Link>
        <Link to="/about" onClick={closeMenu} className="block lg:inline-block text-gray-300 text-base font-medium no-underline p-2.5 rounded-lg transition duration-300 hover:bg-gray-800 hover:text-white">
          About
        </Link>
        <Link to="/projects" onClick={closeMenu} className="block lg:inline-block text-gray-300 text-base font-medium no-underline p-2.5 rounded-lg transition duration-300 hover:bg-gray-800 hover:text-white">
          Projects
        </Link>
        <Link to="/skills" onClick={closeMenu} className="block lg:inline-block text-gray-300 text-base font-medium no-underline p-2.5 rounded-lg transition duration-300 hover:bg-gray-800 hover:text-white">
          Skills
        </Link>
        <Link to="/experience" onClick={closeMenu} className="block lg:inline-block text-gray-300 text-base font-medium no-underline p-2.5 rounded-lg transition duration-300 hover:bg-gray-800 hover:text-white">
          Experience
        </Link>
        <Link to="/contact" onClick={closeMenu} className="block lg:inline-block text-gray-300 text-base font-medium no-underline p-2.5 rounded-lg transition duration-300 hover:bg-gray-800 hover:text-white">
          Contact
        </Link>
      </div>
    </div>
  );
}