import React from "react";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JavaScript from "../assets/JavaScript.png";
import ReactImg from "../assets/React.png";
import Node from "../assets/Node.png";
import Tailwind from "../assets/Tailwind.png";
import Figma from "../assets/Figma.png";
import FireBase from "../assets/Firebase.png";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <div
      id="Skill"
      className="w-hull h-[150vh] sm:h-screen  sm:pb-0  text-white bg-[#003667]"
    >
      <Fade bottom duration={2000}>
        <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <h2 className="text-4xl text-right font-bold inline border-b-4 border-[#0fc2ba]">
              Skills
            </h2>
            <p className="py-4">
              These are the skills I've been studying and working with
            </p>
          </div>
          {/* All Icons container */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center  py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSS} alt="HTML Icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Tailwind} alt="HTML Icon" />
              <p className="my-4">Tailwind</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Figma} alt="HTML Icon" />
              <p className="my-4">Figma</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={JavaScript} alt="HTML Icon" />
              <p className="my-4">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Node} alt="HTML Icon" />
              <p className="my-4">Node.js</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={ReactImg} alt="HTML Icon" />
              <p className="my-4">React.js</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={FireBase} alt="HTML Icon" />
              <p className="my-4">Firebase</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
