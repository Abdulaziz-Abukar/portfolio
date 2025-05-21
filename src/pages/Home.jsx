import React from "react";
import { TextLogo } from "../components/TextLogo";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <>
      {/* TextLogo + Navbar (potential Theme Toggler?) */}
      <header className="w-full fixed top-0 flex justify-between items-center font-['Zain'] py-8 sm:px-18 px-8">
        <TextLogo />
        <Navbar />
      </header>
      <main>
        {/* Hero-Section */}
        <section></section>
        {/* Skills */}
        <section></section>
        {/* Projects */}
        <section></section>
        {/* Contact */}
        <section></section>
      </main>
      <footer></footer>
    </>
  );
};
