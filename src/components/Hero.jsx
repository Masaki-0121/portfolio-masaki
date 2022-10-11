import React from "react";
import Typed from "react-typed";
import { IoIosArrowRoundForward } from "react-icons/io";
import bgPic from "../assets/3d-mac.svg";

const Hero = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[#0a192f]">
        {/* container */}
        <div className="max-w-[900px] mx-auto px-8  flex flex-col fixed top-[25%] left-[20%] h-full z-10">
          <p className="text-xl text-white">Hi there, I'm</p>
          <h1 className="text-4xl sm:text-8xl font-bold pt-[10px] text-[#0fc2ba]">
            <Typed
              strings={["Masaki Toyama"]}
              typeSpeed={200}
              // backSpeed={200}
              // loop
            />
          </h1>
          <p className="text-xl sm:text-5xl font-bold text-white pt-[10px]">
            I build things on the web
          </p>
          <p className="text-white pt-[10px]">
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
        <img
          className="w-[800px] h-[800px] fixed top-[10%] right-[5%]"
          src={bgPic}
          alt="3D-pc"
        />
      </div>
    </div>
  );
};

export default Hero;
