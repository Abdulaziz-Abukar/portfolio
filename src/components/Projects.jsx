import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <section className="py-20">
      <h2
        className="text-center text-xl sm:text-2xl font-semibold font-heading mb-6 scroll-mt-20"
        id="projects-section"
      >
        Projects
      </h2>
      <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
        A selection of real-world applications I've built to explore, learn, and
        solve problems.
      </p>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 w-fit mx-auto md:w-full md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              short={project.short}
              stack={project.stack}
              image={project.image}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
