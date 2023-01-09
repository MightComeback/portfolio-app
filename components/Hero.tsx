import React from "react";
import NeonSign from "./(reusable)/NeonSign";
import { OldSign } from "./(reusable)/OldSign";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Technologies from "./Technologies";

const Hero = () => {
  return (
    <div
      id="hero-section"
      className="w-full bg-main-neon-pink overflow-hidden -z-20"
    >
      <section className="center w-full flex flex-col justify-center items-center z-10">
        <div className="xs:text-3xl text-2xl w-fit flex justify-between my-12">
          <h1 className="smoky-blue-text mx-4 flex-1">Ivan</h1>
          <h1 className="smoky-blue-text pl-4 flex-2">Kuznetsov</h1>
        </div>
        <div className="flex flex-col gap-8 w-full p-4">
          <div className="flex flex-col md:flex-row gap-8">
            <OldSign
              classNameInner="bg-old-gen-cyan rounded-md p-1 top-[4rem] left-[10rem]"
              classNameOuter="rounded-md"
              label="!!!"
            />
            <OldSign
              classNameInner="bg-old-gen-cyan rounded-md p-1 top-[4.2rem] left-[9.8rem]"
              classNameOuter="rounded-md"
              label="!!!"
            />
            <div className="md:basis-2/3 z-10">
              <About />
            </div>
            <div className="md:basis-1/3 z-10">
              <Education />
            </div>
            <OldSign
              classNameInner="w-fit p-1 bg-old-gen-yellow right-[7rem] top-[28rem]"
              classNameOuter="text-sm"
              label="Under construction"
            />
            <OldSign
              classNameInner="pt-3 px-1 pb-1 bg-white right-[5rem] top-[7rem]"
              classNameOuter="text-white p-1 bg-black"
              label="WARNING"
            />
            <OldSign
              classNameInner="pt-3 px-1 pb-1 bg-white right-[4.7rem] top-[7.3rem]"
              classNameOuter="text-white p-1 bg-black"
              label="WARNING"
            />
            <OldSign
              classNameInner="pt-3 px-1 pb-1 bg-white right-[4.4rem] top-[7.6rem]"
              classNameOuter="text-white p-1 bg-black"
              label="WARNING"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:basis-1/3 z-10">
              <Skills />
            </div>
            <OldSign
              classNameInner="bg-white rounded-md left-[4.7rem] bottom-[14rem]"
              classNameOuter="rounded-md text-white p-1 bg-old-gen-green"
              label="NEW"
            />
            <OldSign
              classNameInner="bg-white rounded-md left-[4.5rem] bottom-[14.2rem]"
              classNameOuter="rounded-md text-white p-1 bg-old-gen-green"
              label="NEW"
            />
            <div className="md:basis-2/3 z-10">
              <Technologies />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
