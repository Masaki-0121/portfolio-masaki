import React from "react";
import Typed from "react-typed";
import { IoIosArrowRoundForward } from "react-icons/io";
import bgPic from "../assets/3d-mac.svg";

const Hero = () => {
  return (
    <div className="w-full h-screen pb-[1200px] sm:pb-0  bg-[#003667]">
      <img
        className="hidden xl:flex absolute top-[10%] right-[10%] z-10"
        src={bgPic}
        alt=""
      />
      {/* <div className="bg-3dMac bg-no-repeat w-[800px] h-[800px] "></div> */}

      {/* container */}
      <div className="max-w-[1000px] mx-auto h-screen px-8 flex flex-col absolute top-[30%] left-[5%] sm:absolute sm:top-[25%] sm:left-[15%] z-20 ">
        <p className="text-xl text-white">Hi there, I'm</p>
        <h1 className="text-4xl sm:text-8xl font-bold pt-[10px] text-[#0fc2ba]">
          <Typed
            strings={["Masaki Toyama"]}
            typeSpeed={200}
            // backSpeed={200}
            // loop
          />
        </h1>
        <p className="text-xl sm:text-7xl font-bold text-white pt-[10px]">
          I build things on the web
        </p>
        <p className="text-white pt-[10px] max-w-[700px]">
          I’m a passionate self-taught Front-end-developer, and UI UX designer
          based in Japan.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0fc2ba] hover:border-[#0fc2ba]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <IoIosArrowRoundForward className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
