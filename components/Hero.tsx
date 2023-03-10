"use client";

import { useEffect, useRef, useState } from "react";
import ImageHolder from "./(reusable)/ImageHolder";
import NeonSign from "./(reusable)/NeonSign";
import { OldSign } from "./(reusable)/OldSign";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Technologies from "./Technologies";

let heroHeight = 0;

export async function heroScroll() {
  return heroHeight;
}

const Hero = ({ english }: { english: boolean }) => {
  const heroRef = useRef<any>(null);

  useEffect(() => {
    heroHeight = heroRef.current?.clientHeight;
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full bg-main-neon-pink overflow-hidden -z-20"
    >
      <section className="center w-full flex flex-col justify-center items-center z-10">
        <div className="xs:text-3xl text-2xl flex flex-col items-center my-12 z-20">
          <div className="relative flex w-fit justify-between">
            <h1 className="smoky-blue-text mx-4 flex-1">
              {english ? "Ivan" : "Іван"}
            </h1>
            <h1 className="smoky-blue-text pl-4 flex-2">
              {english ? "Kuznetsov" : "Кузнецов"}
            </h1>
            <NeonSign
              className="-bottom-[30%] xs:left-2 left-3"
              label={english ? "______________" : "____________"}
            />
          </div>
          <div className="z-20 text-xl mt-6">
            <a
              target="_blank"
              href={
                english
                  ? "/Kuznetsov_Ivan_CV_Web_Dev.pdf"
                  : "/Кузнецов_Іван_CV_Веб_Розробник.pdf"
              }
            >
              <h2 className="smoky-blue-text">
                {english ? "MY CV" : "Мій СV"}
              </h2>
            </a>
          </div>
        </div>
        <ImageHolder className="top-[16rem] left-16" image="/retro-(1).png" />
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
              <About english={english} />
            </div>
            <div className="md:basis-1/3 z-10">
              <Education english={english} />
            </div>
            <OldSign
              classNameInner="w-fit p-1 bg-old-gen-yellow right-[7rem] top-[28rem]"
              classNameOuter="text-sm"
              label="Under construction"
            />
            <ImageHolder
              className="right-16 top-[70%]"
              image="/retro-(4).png"
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
              <Skills english={english} />
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
              <Technologies english={english} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
