import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoOctocat } from "react-icons/io";

import Logo from "../assets/Logo-MT.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="">
        <img src={Logo} alt="logo" />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="px-5">About</li>
        <li className="px-5">Skill</li>
        <li className="px-5">Work</li>
        <li className="px-5">Contact</li>
      </ul>
      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? " hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#003667] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">Home</li>
        <li className="py-6 text-3xl">About</li>
        <li className="py-6 text-3xl">Skills</li>
        <li className="py-6 text-3xl">Work</li>
        <li className="py-6 text-3xl">Contact</li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[25%] mb-[40px] left-0">
        <li className="w-[190px] h-[50px] rounded-3xl flex justify-between items-center ml-[-100px]  mb-[20px] hover:ml-[2px] duration-300 hover:bg-[#0fc2ba]">
          <a
            className="flex justify-between  items-center w-full ml-[35px] text-[#0fc2ba] hover:text-white"
            href="/"
          >
            Github <FaGithub className="mr-[30px]" size={30} />
          </a>
        </li>

        <li className="w-[190px] h-[50px] rounded-3xl flex justify-between items-center ml-[-100px]  mb-[20px] hover:ml-[2px] duration-300 hover:bg-[#0fc2ba]">
          <a
            className="flex justify-between  items-center w-full ml-[35px] text-[#0fc2ba]  hover:text-white"
            href="/"
          >
            Linkedin <FaLinkedin className="mr-[30px]" size={30} />
          </a>
        </li>

        <li className="w-[190px] h-[50px] rounded-3xl flex justify-between items-center ml-[-100px]  mb-[20px] hover:ml-[2px] duration-300 hover:bg-[#0fc2ba]">
          <a
            className="flex justify-between  items-center w-full ml-[35px] text-[#0fc2ba]  hover:text-white"
            href="/"
          >
            Email <HiOutlineMail className="mr-[30px]" size={30} />
          </a>
        </li>

        <li className="w-[190px] h-[50px] rounded-3xl flex justify-between items-center ml-[-100px]  mb-[20px] hover:ml-[2px] duration-300 hover:bg-[#0fc2ba]">
          <a
            className="flex justify-between  items-center w-full ml-[35px] text-[#0fc2ba]  hover:text-white"
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
