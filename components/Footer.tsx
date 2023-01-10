import React from "react";
import NeonSign from "./(reusable)/NeonSign";

const Footer = ({ english }: { english: boolean }) => {
  return (
    <div className="w-full relative bg-main-neon-pink border-t pt-4 h-[4rem]">
      <div className="center flex items-center justify-center text-white">
        <h4 className="smoky-blue-text">
          {english ? "Copyright Ivan Kuznetsov" : "Copyright Іван Кузнецов"}
        </h4>
      </div>
      <NeonSign className="bottom-[0.5rem] left-[1rem]" label="easter egg" />
    </div>
  );
};

export default Footer;
