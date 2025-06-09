import React from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";

export const ProjectCard = ({ title, short, stack, image, github, live }) => {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition p-4">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-contain rounded bg-white"
        />
      )}

      <h4 className="font-heading font-semibold text-lg mt-3">{title}</h4>

      {stack && (
        <ul className="flex flex-wrap gap-2 my-3 font-body">
          {stack.map((tech, index) => (
            <li
              key={index}
              className="text-xs border px-2 py-1 rounded-full bg-gray-800 text-gray-100 border-gray-600"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      <p className="font-body text-sm text-gray-600 mb-4">{short}</p>

      <div className="flex gap-2 mt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1 font-body border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition flex items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            <IconBrandGithub size={14} />
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1 font-body border border-blue-700 text-blue-700 rounded hover:bg-blue-700 hover:text-white transition flex items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            <IconWorld size={14} />
            Live Site
          </a>
        )}
      </div>
    </div>
  );
};
