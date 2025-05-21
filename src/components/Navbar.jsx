import React, { useState } from "react";
import { ToggleIcon } from "./features/ToggleIcon";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home-section" },
    { name: "Skills", href: "#skills-section" },
    { name: "Projects", href: "#projects-section" },
    { name: "Contact", href: "#contact-section" },
  ];

  return (
    <nav>
      {/* Desktop */}
      <ul className="hidden lg:flex justify-center items-center gap-8 text-3xl ">
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
      {menuOpen && (
        <div className="fixed inset-0 text-white flex flex-col items-center justify-center gap-10 text-3xl">
          <div className="absolute inset-0 opacity-10 z-[-1]" />
          <ul className="text-white z-10">
            {navItems.map((item, i) => (
              <li key={i}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
