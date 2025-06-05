import React, { useEffect, useState } from "react";
import Abdul from "../assets/Abdul.jpg";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconFileCv } from "@tabler/icons-react";

const titles = [
  "Developer.",
  "Gamer.",
  "Funny Guy.",
  "Husband.",
  "Problem Solver.",
  "Tech Enthusiast.",
  "Lifelong Learner.",
];

export const Hero = ({ menuOpen }) => {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const typingSpeed = 100;
  const pauseBetweenWords = 1500;

  useEffect(() => {
    if (isPaused) return;

    const currentTitle = titles[titleIndex];

    let timeout;

    if (!isDeleting && charIndex <= currentTitle.length) {
      setText(currentTitle.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      setText(currentTitle.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex - 1), typingSpeed / 2);
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseBetweenWords);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, isPaused]);

  return (
    <section className="w-full lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col xl:flex-row items-center justify-center gap-12 min-h-[80vh]">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={Abdul}
            alt="Abdulaziz"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 object-cover rounded-full border-4 border-black shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="text-center xl:text-left space-y-5 max-w-2xl">
          <h1 className="text-xl md:text-2xl text-gray-900 font-semibold font-heading">
            Hi, I'm Abdulaziz
          </h1>
          <h3 className="text-base md:text-2xl text-gray-900 font-heading">
            But others know me as a{" "}
            <span className="text-base md:text-3xl text-blue-800 font-semibold">
              {text}
            </span>
            {!menuOpen && <span className="animate-pulse">|</span>}
          </h3>
          <p className="hidden sm:block text-gray-700 text-base leading-relaxed font-body">
            I'm a software developer with a passion for continuous learning and
            building tools that make life easier. I thrive on solving complex
            problems, exploring new technologies, and writing code that’s as
            elegant as it is functional.
          </p>
          <div className="flex gap-4 justify-center xl:justify-start flex-wrap mt-6 font-body">
            <a
              href="https://github.com/Abdulaziz-Abukar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <IconBrandGithub size={20} stroke={1.5} />
              <span className="text-sm md:text-base">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-abukar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-blue-800 text-blue-800 hover:bg-blue-900 hover:text-white rounded transition duration-200"
            >
              <IconBrandLinkedin size={20} stroke={1.5} />
              <span className="text-sm md:text-base">LinkedIn</span>
            </a>
            <a
              href="../../../public/Abdulaziz-Abukar-Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-800 hover:text-white rounded transition duration-200"
            >
              <IconFileCv size={20} stroke={1.5} />
              <span className="text-sm md:text-base">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
