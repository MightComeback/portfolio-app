"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectsData } from "../utils/data";
import ImageHolder from "./(reusable)/ImageHolder";
import NeonSign from "./(reusable)/NeonSign";
import { OldSign } from "./(reusable)/OldSign";
import ProjectShowcase from "./(reusable)/ProjectShowcase";

let projectHeight = 0;

export async function projectScroll() {
  return projectHeight;
}

const Projects = () => {
  const projectRef = useRef<any>();

  useEffect(() => {
    projectHeight = projectRef.current.clientHeight;
  }, []);

  return (
    <div ref={projectRef} className="w-full bg-main-neon-pink overflow-hidden">
      <div className="center flex flex-col items-center">
        <h2 className="smoky-blue-text my-4 text-xl">My Projects</h2>
        <div className="relative flex flex-wrap md:flex-row flex-col justify-between">
          {ProjectsData.map((project, id) => (
            <div key={id} className="my-8 md:basis-1/2 gap-4">
              <ProjectShowcase
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech}
                details={project.details}
              />
            </div>
          ))}
          <NeonSign
            className="text-xl right-[15%] -top-[0.5rem]"
            label="social network coming soon"
          />
          <OldSign
            classNameInner="py-1 rounded-md px-1 pb-1 bg-old-gen-yellow left-[-9rem] bottom-[12rem]"
            classNameOuter="text-white my-1 rounded-md p-1 bg-old-gen-red"
            label="OPEN"
          />
          <OldSign
            classNameInner="py-1 rounded-md px-1 pb-1 bg-old-gen-yellow left-[-9.3rem] bottom-[12.3rem]"
            classNameOuter="text-white my-1 rounded-md p-1 bg-old-gen-red"
            label="OPEN"
          />
          <ImageHolder
            className="-left-[16rem] top-[30%]"
            image="/retro-(7).png"
          />
          <OldSign
            classNameInner="pt-3 px-1 pb-1 bg-white left-[-11rem] top-[5rem]"
            classNameOuter="text-white p-1 bg-black"
            label="!%$#*"
          />
          <OldSign
            classNameInner="pt-3 px-1 pb-1 bg-white left-[-10.7rem] top-[5.3rem]"
            classNameOuter="text-white p-1 bg-black"
            label="!%$#*"
          />
          <OldSign
            classNameInner="pt-3 px-1 pb-1 bg-white left-[-10.4rem] top-[5.6rem]"
            classNameOuter="text-white p-1 bg-black"
            label="!%$#*"
          />
          <OldSign
            classNameInner="bg-white rounded-md right-[-10rem] top-[14rem]"
            classNameOuter="rounded-md text-white p-1 bg-old-gen-green"
            label="NEW"
          />
          <OldSign
            classNameInner="bg-white rounded-md right-[-9.8rem] top-[14.2rem]"
            classNameOuter="rounded-md text-white p-1 bg-old-gen-green"
            label="NEW"
          />
          <OldSign
            classNameInner="bg-white rounded-md right-[-9.6rem] top-[14.4rem]"
            classNameOuter="rounded-md text-white p-1 bg-old-gen-green"
            label="NEW"
          />
          <ImageHolder
            className="-right-[16rem] bottom-[20%]"
            image="/retro-(12).png"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
