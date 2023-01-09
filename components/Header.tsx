import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-16 shadow-md bg-main-neon-pink">
      <div className="center p-4">
        <ul className="flex justify-between gap-4">
          <li>
            <Link href="#projects-section">
              <span className="smoky-blue-text">Projects</span>
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link href="#hero-section">
              <span className="smoky-blue-text">---</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="smoky-blue-text">Contact me</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
