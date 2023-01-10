"use client";

import { useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const HomePage = () => {
  const [english, setEnglish] = useState(true);

  return (
    <div className="overflow-hidden">
      <div className="absolute left-[2rem] md:left-1/4 top-24 md:top-32 flex text-white text-md md:text-lg -mt-12 mb-6 gap-4">
        <button
          onClick={() => setEnglish(true)}
          className="px-4 border border-main-neon-blue rounded-xl bg-white/10 cursor-pointer"
        >
          EN
        </button>
        <button
          onClick={() => setEnglish(false)}
          className="px-4 border border-main-neon-blue rounded-xl bg-white/10 cursor-pointer"
        >
          UA
        </button>
      </div>
      <Hero english={english} />
      <Projects english={english} />
      <Contact english={english} />
      <Footer english={english} />
    </div>
  );
};

export default HomePage;
