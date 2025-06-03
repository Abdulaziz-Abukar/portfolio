import React from "react";

export const TextLogo = ({ menuOpen }) => {
  return (
    <h1
      className={`text-2xl lg:text-3xl font-bold z-100 ${
        menuOpen ? "text-white" : ""
      }`}
    >
      Abdulaziz
    </h1>
  );
};
