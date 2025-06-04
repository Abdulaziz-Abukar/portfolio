import React, { useEffect } from "react";
import { ToggleIcon } from "./features/ToggleIcon";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const navItems = [
    { name: "Home", href: "#home-section" },
    { name: "Skills", href: "#skills-section" },
    { name: "Projects", href: "#projects-section" },
    { name: "Contact", href: "#contact-section" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <nav className="font-heading">
      {/* Desktop */}
      <ul className="hidden lg:flex justify-center items-center gap-14 text-2xl">
        {navItems.map((item, i) => (
          <li key={i}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      {/* Mobile toggle */}
      <div className="lg:hidden block z-50 relative">
        <ToggleIcon active={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      </div>
      {/* Fullscreen Mobile Men */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 text-white bg-gray-900/97 flex flex-col items-center justify-center gap-10 text-xl"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 opacity-10 z-[-1]" />
            <ul className="text-white z-10 space-y-6">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
