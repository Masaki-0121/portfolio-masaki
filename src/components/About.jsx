import React from "react";
import profilePic from "../assets/profile-picture.svg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#003667] pb-[1000px] sm:pb-0 text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl text-right font-bold inline border-b-4 border-[#0fc2ba]">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-left text-3xl text-[#0fc2ba] font-bold">
              Hi, nice to meet you!
            </p>
            <p className="sm:text-left text-xl ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
              sequi exercitationem accusantium accusamus ab voluptates pariatur
              obcaecati delectus perferendis consequatur inventore recusandae
              officia deserunt at officiis sunt asperiores cumque ipsum!
            </p>
            <div className="sm:text-left text-xl my-[20px]">
              <h3 className="text-2xl text-left font-bold text-[#0fc2ba]">
                Cetificate
              </h3>
              <ul className="text-sm text-white">
                <li>
                  -UX Design Fundamentals (California Institute of the Arts）
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
          <img className="" src={profilePic} alt="" />
        </div>
      </div>
    </div>

    // <div className="w-full h-screen flex justify-between items-center bg-[#003667]">
    //   <h2>About</h2>
    //   {/* Container */}
    //   <div className="max-w-[600px] h-3/5 px-4">
    //     <p className="sm:text-right text-4xl font-bold">
    //       Hi I'm Masaki, nice to meet you. Please take a look around.
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
    //       quae fugiat, optio aliquid atque dicta reiciendis ducimus excepturi
    //       labore corrupti voluptatum beatae quos sunt numquam mollitia, impedit
    //       repellat natus doloremque.
    //     </p>
    //   </div>
    //   <img src={profilePic} alt="" />
    // </div>
  );
};

export default About;
