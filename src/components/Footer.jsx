import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="mt-20 px-6 py-10 border-t bg-white font-body text-gray-700">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex justify-center  gap-6 text-sm items-center">
          <a
            href="mailto:abdulazizabubakarfaqih@gmail.com"
            className="flex items-center gap-2 hover:text-blue-700 transition"
          >
            <IconMail size={18} />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/abdul-abukar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-700 transition"
          >
            <IconBrandLinkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/Abdulaziz-Abukar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-700 transition"
          >
            <IconBrandGithub size={18} />
            <span>GitHub</span>
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-6">
          This site was built from scratch using React and Tailwind CSS.
        </p>
        <p className="text-xs text-gray-500 mt-4">
          Abdulaziz Abukar &copy; 2025
        </p>
      </div>
    </footer>
  );
};
