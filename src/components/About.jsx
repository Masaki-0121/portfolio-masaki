import React from "react";
import profilePic from "../assets/profile-picture.svg";

import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen sx-[] bg-[#003667]  sm:pb-0 text-white"
    >
      <Fade bottom duration={2000}>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1200px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-left pb-8 pl-4">
              <p className="text-4xl text-right font-bold inline border-b-4 border-[#0fc2ba]">
                About
              </p>
            </div>
          </div>

          <div className="max-w-[1200px] w-full  grid sm:grid-cols-2 gap-8 px-4">
            <div>
              <p className="sm:text-left text-3xl text-[#0fc2ba] font-bold">
                Hi, nice to meet you!
              </p>
              <p className="sm:text-left text-xl ">
                My name is Masaki. I code, and design of user interfaces. I'm a
                self-taught web developer who have a strong enthusiasm in
                programming, designing and new technology. My interest in web
                development started when I decided to build a my dream Ramen
                restaurant website with HTML, and CSS when I was a cook in
                France!
              </p>
              <div className="sm:text-left text-xl my-[20px]">
                <h3 className="text-2xl text-left font-bold text-[#0fc2ba]">
                  Cetificate
                </h3>
                <ul className="text-sm text-white">
                  <li>
                    -UI UX Design Fundamentals (California Institute of the
                    Arts）
                  </li>
                  <li>
                    -Elements of User Interface Design (California Institute of
                    the Arts）
                  </li>
                  <li>
                    -Fundamentals of Graphic Design (California Institute of the
                    Arts）
                  </li>
                  <li>-Introduction to HTML5（University of Michigan）</li>
                </ul>
              </div>
            </div>
            <img className="sm:pl-[20%]" src={profilePic} alt="" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
