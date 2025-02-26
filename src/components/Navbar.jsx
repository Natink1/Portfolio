import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto md:flex justify-between items-center py-6">
        <div className="text-xl pl-25 font-bold flex items-center gap-1">
          <span className="text-orange-400">Portfolio</span>
        </div>
        <div>
          <ul className="md:flex items-center space-x-6 lg:text-lg md:text-base text-white">
            <Link
              to="/"
              smooth={true}
              duration={800}
              className="cursor-pointer text-xl hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear"
            >
              Home
            </Link>
            <Link
              to="Services"
              smooth={true}
              duration={800}
              className=" cursor-pointer text-xl hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear "
            >
              Services
            </Link>
            <Link
              to="Aboutme"
              smooth={true}
              duration={800}
              className=" cursor-pointer text-xl hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear "
            >
              About Me
            </Link>
            <Link
              to="My_Skills"
              smooth={true}
              duration={800}
              className=" cursor-pointer text-xl hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear "
            >
              My Skills
            </Link>
            <Link
              to="Works"
              smooth={true}
              duration={800}
              className=" cursor-pointer text-xl hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear "
            >
              Works
            </Link>
            <Link
              to="Contactme"
              smooth={true}
              duration={800}
              className=" cursor-pointer text-xl hover:text-orange-400 hover:scale-105 transition-all duration-150 ease-linear "
            >
              Contact Me
            </Link>
          </ul>
        </div>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
