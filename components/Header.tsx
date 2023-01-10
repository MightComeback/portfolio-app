"use client";

import { heroScroll } from "./Hero";
import { projectScroll } from "./Projects";

const Header = () => {
  const scrollToProjects = async () => {
    const scrollToHeroHeight = await heroScroll();
    window.scrollTo(0, scrollToHeroHeight);
  };

  const scrollToContact = async () => {
    const scrollToHeroHeight = await heroScroll();
    const scrollToProjectHeight = await projectScroll();
    window.scrollTo(0, scrollToHeroHeight + scrollToProjectHeight);
  };

  return (
    <div className="w-full h-16 shadow-md bg-main-neon-pink">
      <div className="center p-4">
        <ul className="flex justify-between gap-4">
          <li>
            <button onClick={() => scrollToProjects()}>
              <span className="hidden xs:block smoky-blue-text">Projects</span>
            </button>
          </li>
          <li className="">
            <a target="_blank" href="https://github.com/MightComeback">
              <span className="smoky-blue-text">GITHUB</span>
            </a>
          </li>
          <li>
            <button onClick={() => scrollToContact()}>
              <span className="hidden xs:block smoky-blue-text">
                Contact me
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
