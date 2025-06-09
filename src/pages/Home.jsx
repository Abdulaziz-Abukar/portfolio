import React, { useState } from "react";
import { TextLogo } from "../components/TextLogo";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* TextLogo + Navbar (potential Theme Toggler?) */}
      <header
        className={`w-full sticky top-0 flex justify-between items-center py-4 lg:px-18 px-4`}
      >
        <TextLogo menuOpen={menuOpen} />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>
      <main>
        {/* Hero-Section */}
        <section className="w-full h-[650px] flex items-center sm:justify-center sm:px-18">
          <Hero menuOpen={menuOpen} />
        </section>
        {/* About */}
        <section className="sm:px-18 mt-50">
          <About />
        </section>
        {/* Skills */}
        <section className="sm:p-10 mt-50">
          <Skills />
        </section>
        {/* Projects */}
        <section className="sm:p-10 mt-50">
          <Projects />
        </section>
        {/* Contact */}
        <section className="sm:p-10 mt-50">
          <Contact />
        </section>
      </main>
      <footer className="mt-30">
        <Footer />
      </footer>
    </>
  );
};
