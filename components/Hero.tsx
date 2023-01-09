import React from "react";
import NeonSign from "./(reusable)/NeonSign";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Technologies from "./Technologies";

const Hero = () => {
  return (
    <div id="hero-section" className="w-full bg-main-neon-pink overflow-hidden">
      <section className="center w-full flex flex-col justify-center items-center">
        <div className="xs:text-3xl text-2xl w-fit flex justify-between my-12">
          <h1 className="smoky-blue-text mx-4 flex-1">Ivan</h1>
          <h1 className="smoky-blue-text pl-4 flex-2">Kuznetsov</h1>
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
