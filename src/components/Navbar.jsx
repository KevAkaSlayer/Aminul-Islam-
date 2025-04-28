"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AminWhite from '../assets/Aminwhite.png';
import AminBlack from '../assets/Aminblack.png';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experiences", href: "#experiences" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth scroll handler
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.getElementById(href.replace("#", ""));
    if (target) {
      const yOffset = target.offsetTop - 80;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Scroll-spy: update activeSection
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 100;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const sec = document.getElementById(navItems[i].href.replace("#", ""));
        if (sec && sec.offsetTop <= pos) {
          setActiveSection(navItems[i].href.replace("#", ""));
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 py-4 ${darkMode ? "bg-black" : "bg-white"
        } shadow-md font-serif`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={e => handleScroll(e, "#home")}
          className="text-2xl font-bold italic"
        >
          <img
            src={darkMode ? AminWhite : AminBlack}
            alt="Aminul Islam Logo"
            className="h-8 w-auto"
          />
        </a>


        {/* Desktop */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-sm font-medium transition-colors ${isActive
                    ? darkMode
                      ? "text-white"
                      : "text-black"
                    : darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
              >
                {item.name}
              </a>
            );
          })}

          {/* Dark Mode Toggle */}
          <label className="flex items-center cursor-pointer ml-4">
            <div className="relative inline-block w-10 h-6">
              <input
                type="checkbox"
                className="absolute opacity-0 w-0 h-0 peer"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <span className="absolute inset-0 bg-gray-300 rounded-full transition-colors peer-checked:bg-gray-700" />
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full" />
            </div>
          </label>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden p-2 rounded-md ${darkMode ? "text-white" : "text-black"
            }`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div
          className={`lg:hidden mt-2 py-4 ${darkMode ? "bg-black" : "bg-white"
            }`}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${isActive
                      ? darkMode
                        ? "text-white"
                        : "text-black"
                      : darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-black"
                    }`}
                >
                  {item.name}
                </a>
              );
            })}

            {/* Dark mode toggle in mobile menu */}
            <div className="px-4 py-2 flex items-center">
              <span
                className={`mr-3 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                {darkMode ? "Dark Mode" : "Light Mode"}
              </span>
              <label className="relative inline-block w-10 h-6">
                <input
                  type="checkbox"
                  className="absolute opacity-0 w-0 h-0 peer"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <span className="absolute inset-0 bg-gray-300 rounded-full transition-colors peer-checked:bg-gray-700" />
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full" />
              </label>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
