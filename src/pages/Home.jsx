import React, { useState } from "react";
import { TextLogo } from "../components/TextLogo";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* TextLogo + Navbar (potential Theme Toggler?) */}
      <header
        className={`w-full sticky top-0 flex justify-between items-center py-8 sm:px-18 px-8`}
      >
        <TextLogo menuOpen={menuOpen} />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>
      <main className="h-[10000px]">
        {/* Hero-Section */}
        <section className="w-full h-[750px] flex items-center sm:justify-center sm:px-18">
          <Hero menuOpen={menuOpen} />
        </section>
        {/* About */}
        <section></section>
        {/* Skills */}
        <section className="mt-25">
          <Skills />
        </section>
        {/* Projects */}
        <section></section>
        {/* Contact */}
        <section></section>
      </main>
      <footer></footer>
    </>
  );
};
