import React from "react";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Technologies from "./Technologies";

const Hero = () => {
  return (
    <div className="w-full bg-main-neon-pink">
      <section className="center border-x-2 border-white w-full flex flex-col justify-center items-center">
        <div className="text-3xl w-fit flex justify-between my-12">
          <span className="smoky-blue-text mx-4 flex-1">Ivan</span>
          <span className="smoky-blue-text pl-4 flex-2">Kuznetsov</span>
        </div>
        <div className="flex flex-col gap-8 w-full p-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:basis-2/3">
              <About />
            </div>
            <div className="md:basis-1/3">
              <Education />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:basis-1/3">
              <Skills />
            </div>
            <div className="md:basis-2/3">
              <Technologies />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
