import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto md:flex justify-between items-center py-6">
        <div className="text-xl font-bold flex items-center gap-1">
          <span className="text-orange-400">Portfolio</span>
        </div>
        <div>
          <ul className="md:flex items-center space-x-6 lg:text-lg md:text-base text-white">
            <Link
              to="/"
              smooth={true}
              duration={800}
              className="hover:text-orange-400 text-xl hover:font-bold transition-all ease-linear duration-150 "
            >
              Home
            </Link>
            <Link
              to="Services"
              smooth={true}
              duration={800}
              className=" cursor-pointer hover:text-orange-400 text-xl hover:font-bold transition-all ease-linear duration-150"
            >
              Services
            </Link>
            <Link
              to="Aboutme"
              smooth={true}
              duration={800}
              className="hover:text-orange-400 text-xl hover:font-bold transition-all ease-linear duration-150"
            >
              About Me
            </Link>
            <Link
              to="My_Skills"
              smooth={true}
              duration={800}
              className="hover:text-orange-400 text-xl hover:font-bold transition-all ease-linear duration-150"
            >
              My Skills
            </Link>
            <Link
              to="Works"
              smooth={true}
              duration={800}
              className="hover:text-orange-400 text-xl hover:font-bold transition-all ease-linear duration-150"
            >
              Works
            </Link>
            <Link
              to="Contactme"
              smooth={true}
              duration={800}
              className="hover:text-orange-400 text-xl hover:font-bold transition-all ease-linear duration-150"
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
