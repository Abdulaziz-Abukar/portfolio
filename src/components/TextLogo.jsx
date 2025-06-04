import React from "react";

export const TextLogo = ({ menuOpen }) => {
  return (
    <h1
      className={`text-3xl font-bold z-100 font-heading ${
        menuOpen ? "text-white" : ""
      }`}
    >
      Abdulaziz
    </h1>
  );
};
