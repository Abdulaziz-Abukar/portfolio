import React, { useState } from "react";
import { TextLogo } from "../components/TextLogo";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* TextLogo + Navbar (potential Theme Toggler?) */}
      <header className="w-full sticky top-0 flex justify-between items-center font-['Zain'] py-8 sm:px-18 px-8">
        <TextLogo menuOpen={menuOpen} />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>
      <main>
        {/* Hero-Section */}
        <section className="w-full h-[750px] flex items-center sm:justify-center sm:px-18">
          <Hero menuOpen={menuOpen} />
        </section>
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
