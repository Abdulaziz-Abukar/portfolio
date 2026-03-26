import React from "react";

export const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 sm:p-10 space-y-8 font-body">
      <h2
        className="text-xl sm:text-2xl font-semibold font-heading text-center scroll-mt-30"
        id="about-section"
      >
        About Me
      </h2>

      <section>
        <h3 className="text-xl font-semibold mb-2">My Journey</h3>
        <p className="leading-relaxed">
          I've always been fascinated by computers — exploring games,
          customizing software, and trying to break things to understand how
          they worked. That curiosity eventually led me to software engineering,
          where building systems and solving problems became both a discipline
          and a creative outlet.
          <br />
          <br />
          Over time, my interest has expanded beyond application development
          into <strong>data systems and analytics</strong>, where software
          engineering meets information and decision-making. I enjoy working
          with data pipelines, backend services, and tools that transform raw
          information into something useful and reliable.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">How I Work</h3>
        <p className="leading-relaxed">
          I'm driven by{" "}
          <strong>clarity, scalability, and thoughtful design</strong>. I enjoy
          breaking complex problems into manageable pieces and building
          solutions that are both practical and maintainable.
          <br />
          <br />
          My experience spans{" "}
          <strong>backend development, APIs, and data workflows</strong>, and I
          care about writing code that not only works but can grow with the
          system around it. I value collaboration, continuous learning, and
          building tools that make other developers' and users' lives easier.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">What's Next?</h3>
        <p className="leading-relaxed">
          I'm currently focused on growing as a software engineer by building
          real-world applications and expanding my skills in{" "}
          <strong>
            data engineering, analytics workflows, and backend systems
          </strong>
          . I'm especially interested in projects that involve{" "}
          <strong>
            data pipelines, automation, and transforming raw data into
            meaningful insights
          </strong>
          .
          <br />
          <br />
          <p className="leading-relaxed">
            Every project is an opportunity to learn, improve, and leave
            something better than I found it.
          </p>
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
