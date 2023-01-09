"use client";

import { useState } from "react";

const ProjectShowcase = ({
  title,
  description,
  image,
  tech,
  details,
}: {
  title: string;
  description: string;
  image: string;
  tech: string[];
  details: string;
}) => {
  const [focused, setFocused] = useState(false);

  const focusProject = () => {
    console.log(focused);
    setFocused(!focused);
  };

  return (
    <div className="px-4 relative">
      <div
        className="flex flex-col p-2 text-white items-center rounded-md shadow-lg
        transition-transform hover:scale-110 hover:cursor-pointer bg-main-neon-pink
        ease-in-out border border-main-neon-blue"
        onClick={() => focusProject()}
      >
        <h3 className="smoky-blue-text m-2">{title}</h3>
        <div className="border-b flex items-center flex-col">
          <div className="relative shadow-md">
            <img src={image} alt={title} />
          </div>
          <p className="my-2">{description}</p>
        </div>
        <div className="flex flex-wrap my-2 gap-4">
          {tech.map((technology, id) => (
            <div
              key={id}
              className="rounded-xl py-1 px-2 bg-white/10 shadow-md font-semibold"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
      {focused && (
        <div className="sm:flex hidden fixed top-0 left-0 w-screen h-screen backdrop-blur-sm items-center justify-center z-10">
          <div
            className="sm:flex hidden flex-col p-2 text-white items-center rounded-md shadow-md
          bg-main-neon-pink border border-main-neon-blue
          w-[calc(100vw-15%)] z-20"
            onClick={() => focusProject()}
          >
            <h3 className="smoky-blue-text m-2">{title}</h3>
            <div className="pb-2 border-b flex flex-col lg:flex-row items-center">
              <img className="w-[calc(100vw-50%)]" src={image} alt={title} />
              <div className="flex flex-col justify-start p-2">
                <p className="my-2 text-lg">{description}</p>
                <div className="flex flex-wrap my-2 gap-4">
                  {tech.map((technology, id) => (
                    <div
                      key={id}
                      className="rounded-xl py-1 px-2 bg-white/10 shadow-md font-semibold"
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold">{details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
