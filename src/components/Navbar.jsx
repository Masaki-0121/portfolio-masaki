import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoOctocat } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";

import Logo from "../assets/Logo-MT.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#003667] text-gray-300 z-40">
      <ul>
        <li className="cursor-pointer">
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <img src={Logo} alt="logo" />
          </Link>
        </li>
      </ul>
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
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
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
          <Link
            activeClass="active"
            to="Skill"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skill
          </Link>
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
          <Link
            activeClass="active"
            to="Work"
            spy={true}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
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
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-50">
        {!nav ? (
          <FaBars size={25} className="fill-[#0fc2ba]" />
        ) : (
          <FaTimes size={25} className="fill-[#0fc2ba]" />
        )}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-[#003667] flex flex-col justify-center items-center text-white "
        }
      >
        <li className="py-6 text-2xl">Home</li>
        <li className="py-6 text-2xl">
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link
            activeClass="active"
            to="Skill"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skill
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link
            activeClass="active"
            to="Work"
            spy={true}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[25%] mb-[40px] left-0">
        <ul>
          <li className="w-[190px] h-[50px] rounded-3xl flex justify-between items-center ml-[-100px]   mb-[20px] hover:ml-[2px] duration-300 hover:bg-[#0fc2ba]">
            <a
              className=" flex justify-between  items-center w-full h-[50px] ml-[35px] text-[#0fc2ba] hover:text-white"
              href="https://github.com/Masaki-0121"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub className="mr-[30px]" size={30} />
            </a>
          </li>

          <li className="w-[190px] h-[50px] rounded-3xl flex justify-between items-center ml-[-100px]  mb-[20px] hover:ml-[2px] duration-300 hover:bg-[#0fc2ba]">
            <a
              className="flex justify-between  items-center w-full  h-[50px] ml-[35px] text-[#0fc2ba]  hover:text-white"
              href="https://www.linkedin.com/in/%E6%AD%A3%E6%A8%B9-%E9%81%A0%E5%B1%B1-473220256/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin className="mr-[30px]" size={30} />
            </a>
          </li>

          <li className="w-[190px] h-[50px] rounded-3xl flex justify-between items-center ml-[-100px]  mb-[20px] hover:ml-[2px] duration-300 hover:bg-[#0fc2ba]">
            <a
              className="flex justify-between  items-center w-full  h-[50px] ml-[35px] text-[#0fc2ba]  hover:text-white"
              href="https://www.instagram.com/masa_ui.dev/"
              target="_blank"
              rel="noreferrer"
            >
              Insta <BsInstagram className="mr-[30px]" size={30} />
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
