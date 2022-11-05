import React from "react";
import Fade from "react-reveal/Fade";

const callouts = [
  {
    name: "Ramen Komugi website",
    description:
      "This my first portfolio website made out by React.js and Twilwind CSS.",
    imageSrc: require("../assets/work1.jpg"),
    imageAlt: "",
    href: "#",
  },
  {
    name: "Facebookish UI",
    description:
      "This is a clone application of Facebook UI with some functionality made out by React.js and MUI(Material UI) ",
    imageSrc: require("../assets/work2.jpg"),
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Portfolio Website",
    description:
      "This my first portfolio website made out by React.js and Twilwind CSS.",
    imageSrc: require("../assets/work3.jpg"),
    imageAlt: "Portfolio website made out by React and Tailwind",
    href: "#",
  },
];

export default function Example() {
  return (
    <div id="Work" className="w-full h-[200vh] sm:h-screen bg-[#003667]">
      <Fade bottom duration={2000}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-4xl text-right font-bold inline border-b-4 border-[#0fc2ba]">
              Work
            </h2>
            <div className="mx-w-[1200px] mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75F sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-fill object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-[#0fc2ba]">
                    <a href={callout.href} className="font-bold">
                      <span className="absolute inset-0 font-bold" />
                      {callout.name}
                    </a>
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
  );
}
