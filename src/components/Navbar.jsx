import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoOctocat } from "react-icons/io";

import Logo from "../assets/Logo-MT.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#003667] text-gray-300 z-40">
      <div className="">
        <a
          href="
      "
        >
          <img src={Logo} alt="logo" />
        </a>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li
          className="px-5  relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-1
                before:left-0
                before:w-0
                before:h-[1px]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-white
                before:via-white
                before:to-white
                hover:before:w-full
                hover:before:opacity-100"
        >
          About
        </li>
        <li
          className="px-5 relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-1
                before:left-0
                before:w-0
                before:h-[1px]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-white
                before:via-white
                before:to-white
                hover:before:w-full
                hover:before:opacity-100"
        >
          Skill
        </li>
        <li
          className="px-5 relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-1
                before:left-0
                before:w-0
                before:h-[1px]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-white
                before:via-white
                before:to-white
                hover:before:w-full
                hover:before:opacity-100"
        >
          Work
        </li>
        <li
          className="px-5 relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-1
                before:left-0
                before:w-0
                before:h-[1px]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-white
                before:via-white
                before:to-white
                hover:before:w-full
                hover:before:opacity-100"
        >
          Contact
        </li>
      </ul>
      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-50">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[25%] mb-[40px] left-0">
        <li className="w-[190px] h-[50px] rounded-3xl flex justify-between items-center ml-[-100px]   mb-[20px] hover:ml-[2px] duration-300 hover:bg-[#0fc2ba]">
          <a
            className=" flex justify-between  items-center w-full h-[50px] ml-[35px] text-[#0fc2ba] hover:text-white"
            href="/"
          >
            Github <FaGithub className="mr-[30px]" size={30} />
          </a>
        </li>

        <li className="w-[190px] h-[50px] rounded-3xl flex justify-between items-center ml-[-100px]  mb-[20px] hover:ml-[2px] duration-300 hover:bg-[#0fc2ba]">
          <a
            className="flex justify-between  items-center w-full  h-[50px] ml-[35px] text-[#0fc2ba]  hover:text-white"
            href="/"
          >
            Linkedin <FaLinkedin className="mr-[30px]" size={30} />
          </a>
        </li>

        <li className="w-[190px] h-[50px] rounded-3xl flex justify-between items-center ml-[-100px]  mb-[20px] hover:ml-[2px] duration-300 hover:bg-[#0fc2ba]">
          <a
            className="flex justify-between  items-center w-full  h-[50px] ml-[35px] text-[#0fc2ba]  hover:text-white"
            href="/"
          >
            Email <HiOutlineMail className="mr-[30px]" size={30} />
          </a>
        </li>

        <li className="w-[190px] h-[50px] rounded-3xl flex justify-between items-center ml-[-100px]  mb-[20px] hover:ml-[2px] duration-300 hover:bg-[#0fc2ba]">
          <a
            className="flex justify-between  items-center w-full  h-[50px] ml-[35px] text-[#0fc2ba]  hover:text-white"
            href="/"
          >
            Resume <IoLogoOctocat className="mr-[30px]" size={30} />
          </a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
