import React, { useState } from "react";
import { skills } from "../data/skills";
import { tabs } from "../data/skills";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export const Skills = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const filteredSkills = skills.filter(
    (skill) => skill.type === selectedTab.label
  );

  return (
    <>
      <section className="flex flex-col items-center justify-center w-full px-4">
        <div className="w-full max-w-3xl skills-height p-6 sm:p-10 space-y-8">
          <h2 className="text-2xl font-bold font-heading text-center mb-6">
            Skills
          </h2>
          {/* Tabs */}
          <ul className="flex justify-center gap-4 sm:gap-6 border-b border-gray-300 pb-2 font-body">
            {tabs.map((tab) => (
              <motion.li
                key={tab.label}
                onClick={() => setSelectedTab(tab)}
                className="relative px-2 py-1 sm:px-4 sm:py-2 cursor-pointer font-medium text-sm sm:text-base text-gray-700"
                animate={{
                  color:
                    selectedTab.label === tab.label ? "#1D4ED8" : "#374151",
                }}
              >
                {tab.label}
                {selectedTab.label === tab.label && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600"
                  />
                )}
              </motion.li>
            ))}
          </ul>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.ul
              key={selectedTab.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-[repeat(auto-fit,minmax(120px,max-content))] justify-center gap-4 mt-6 font-body"
            >
              {filteredSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex flex-col p-2 rounded-xl text-sm sm:text-base border shadow-md bg-white hover:shadow-md transition"
                >
                  <p className="font-semibold ">{skill.name}</p>
                  <p className="text-sm text-gray-600">{skill.level}</p>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};
