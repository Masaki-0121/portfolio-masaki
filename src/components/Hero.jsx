import React from "react";
import Typed from "react-typed";
import { IoIosArrowRoundForward } from "react-icons/io";
import bgPic from "../assets/3d-mac.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="Home"
      className="w-full mx-auto h-[100vh] sm:h-[180vh] md:h-[70vh] xl:h-screen sm:pb-0  bg-[#003667]"
    >
      <div className="max-w-[1000px] md:w-[600px] xl:w-[1000px]  mx-auto">
        <img
          className="hidden xl:flex absolute top-[10%] right-[10%] z-10"
          src={bgPic}
          alt="3D graphic laptop"
        />

        {/* container */}
        <div className="max-w-[1000px] md:w-[600px] xl:w-[1000px]  mx-auto h-2/5 px-8 flex flex-col absolute top-[30%] left-[5%] sm:absolute sm:top-[25%] sm:left-[15%] z-20 ">
          <p className="text-xl text-white">Hi there, I'm</p>
          <h1 className="text-4xl sm:text-6xl xl:text-8xl font-bold pt-[10px] text-[#0fc2ba]">
            <Typed
              strings={["Masaki Toyama"]}
              typeSpeed={200}
              // backSpeed={200}
              // loop
            />
          </h1>

          <p className="text-xl sm:text-6xl xl:text-7xl font-bold text-white pt-[10px]">
            I build things on the web
          </p>

          <p className="text-white pt-[10px] max-w-[700px]">
            I’m a passionate self-taught Front-end-developer, and UI UX designer
            based in Japan.
          </p>
          <div>
            <Link
              activeClass="active"
              to="Work"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0fc2ba] hover:border-[#0fc2ba]">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <IoIosArrowRoundForward className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
