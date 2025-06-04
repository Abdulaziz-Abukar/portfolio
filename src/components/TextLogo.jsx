import React from "react";
import LogoBlack from "../assets/Logo-Black.png";
import LogoWhite from "../assets/Logo-White.png";

export const TextLogo = ({ menuOpen }) => {
  return (
    // <h1
    //   className={`text-2xl lg:text-3xl font-bold z-100 font-heading ${
    //     menuOpen ? "text-white" : ""
    //   }`}
    // >
    //   Abdulaziz
    // </h1>
    <img
      src={!menuOpen ? LogoBlack : LogoWhite}
      alt="Logo design for my website"
      className="w-20 z-100"
    />
  );
};
