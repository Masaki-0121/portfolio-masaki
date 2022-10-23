import React from "react";
import workImg1 from "../assets/pf-picture-2.jpg";
import workImg2 from "../assets/work-img2.jpg";
import workImg3 from "../assets/work-img3.jpg";

const callouts = [
  {
    name: "Ramen Komugi",
    description: "An imaginary Japanese noodle restaurant.",
    imageSrc: workImg1,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Voyage",
    description: "Travel agency home page",
    imageSrc: workImg2,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc: workImg3,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Example() {
  return (
    <div className="w-full sm:h-screen h-[220vh] bg-[#003667]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl text-right font-bold inline border-b-4 border-[#0fc2ba]">
            Work
          </h2>
          <div className="mx-w-[1200px] mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-[#0fc2ba]">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
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
    </div>
  );
}
