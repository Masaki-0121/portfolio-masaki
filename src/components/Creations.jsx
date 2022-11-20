import React from "react";
import { Fade } from "react-reveal";

const callouts = [
  {
    id: 1,
    name: "Ramen Komugi website",
    description:
      "This my first portfolio website made out by React.js and Tailwind CSS.",
    imageSrc: require("../assets/work1.jpg"),
    imageAlt: "Japanese noodle restaurant website",
    hrefCode: "https://github.com/Masaki-0121/Komugi-homepage",
    hrefDemo: "https://masaki-0121.github.io/Komugi-homepage/",
  },
  {
    id: 2,
    name: "Facebookish UI",
    description:
      "This is a clone application of Facebook UI with some functionality made out by React.js and MUI(Material UI) ",
    imageSrc: require("../assets/work2.jpg"),
    imageAlt: "Facebookis UI web application",
    hrefCode: "https://github.com/Masaki-0121/Facebookish-App",
    hrefDemo: "https://masaki-0121.github.io/Facebookish-App/",
  },
  {
    id: 3,
    name: "Portfolio Website",
    description:
      "This my first portfolio website made out by React.js and Tailwind CSS.",
    imageSrc: require("../assets/work3.jpg"),
    imageAlt: "Portfolio website of Masaki Toyama",
    hrefCode: "https://github.com/Masaki-0121/portfolio-masaki",
    hrefDemo: "#",
  },
];

function Creations() {
  return (
    <div>
      <div id="Work" className="w-full h-[200vh] sm:h-screen bg-[#003667]">
        <Fade bottom duration={1200}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
            <div className="mx-auto max-w-2xl py-10 sm:py-14 lg:max-w-none lg:py-32">
              <h2 className="text-4xl text-right font-bold inline border-b-4 border-[#0fc2ba]">
                Work
              </h2>
              <div className="mx-w-[1200px] mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {callouts.map((callout) => (
                  <div className="group relative">
                    <div className="relative h-50 w-full overflow-hidden rounded-lg  group-hover:opacity-75F sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <div
                        img
                        style={{ backgroundImage: `url(${callout.imageSrc})` }}
                        alt=""
                        className=" group container rounded-md 
              flex justify-center text-center items-center content-div"
                      >
                        <div className="opacity-0 group-hover:opacity-100 ">
                          <a href={callout.hrefCode} target="_blank">
                            <button
                              className=" text-center rounded-lg px-4 py-3 m-2
                       bg-[#0fc2ba] text-white font-bold text-lg"
                            >
                              Code
                            </button>
                          </a>
                          <a
                            href={callout.hrefDemo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button
                              className="text-center rounded-lg px-4 py-3 m-2
                          bg-[#0fc2ba] text-white font-bold text-lg"
                            >
                              Demo
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-6 text-sm text-[#0fc2ba]">
                      {callout.name}
                    </h3>
                    <p className="text-base font-semibold text-white">
                      {callout.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Creations;
