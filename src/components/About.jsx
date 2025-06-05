import React from "react";

export const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 sm:p-10 space-y-8 font-body">
      <h2 className="text-2xl font-bold font-heading text-center">About Me</h2>

      <section>
        <h3 className="text-xl font-semibold mb-2">My Journey</h3>
        <p className="leading-relaxed">
          I've always been fascinated by computers, whether it was exploring
          games, customizing software, or just trying to break things to see how
          they worked. That passion grew over the years and naturally led me to
          pursue software engineering. What started as curiosity turned into a
          craft: designing, building, and refining digital experiences that
          solve real problems and bring ideas to life.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">How I Work</h3>
        <p className="leading-relaxed">
          I'm driven by clean, scalable code and meaningful collaboration. I
          enjoy taking complex problems, breaking them down, and delivering
          thoughtful solutions. Whether I'm working on sleek frontends, robust
          backends, or integrating APIs, I strive for balance between user
          experience and technical performance.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">What's Next?</h3>
        <p className="leading-relaxed">
          I'm currently focused on growing as a developer by building real-world
          applications, learning new technologies, and refining my ability to
          work both independently and within teams. Every project is an
          opportunity to learn, improve, and leave something better than I found
          it.
        </p>
        <p className="leading-relaxed mt-4">
          If you'd like to see how I bring that mindset to life, feel free to
          click the button below.
        </p>
      </section>

      <section className="flex justify-center mt-12">
        <a
          href="#projects-section"
          className="px-6 py-2 border border-blue-700 text-blue-700 rounded hover:bg-blue-700 hover:text-white transition duration-200"
        >
          View Projects
        </a>
      </section>
    </div>
  );
};
