"use client";

import Link from "next/link";
import React from "react";
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
              <span className="smoky-blue-text">Projects</span>
            </button>
          </li>
          <li className="hidden sm:block">
            <Link href="#hero-section">
              <span className="smoky-blue-text">---</span>
            </Link>
          </li>
          <li>
            <button onClick={() => scrollToContact()}>
              <span className="smoky-blue-text">Contact me</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
