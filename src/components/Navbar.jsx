"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AminWhite from '../assets/Aminwhite.png';
import AminBlack from '../assets/Aminblack.png';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Smooth scroll to section
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Scroll-spy logic
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 100;
      const sections = ["home", "skills", "education", "experiences", "achievements", "projects", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 py-4 ${darkMode ? "bg-black" : "bg-white"} shadow-md font-serif`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={() => scrollTo("home")} className="flex items-center">
          <img src={darkMode ? AminWhite : AminBlack} alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="#home"
            onClick={() => scrollTo("home")}
            className={`text-sm font-medium transition-colors ${activeSection === "home"
              ? darkMode ? "text-white" : "text-black"
              : darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
          >Home</a>
          <a
            href="#skills"
            onClick={() => scrollTo("skills")}
            className={`text-sm font-medium transition-colors ${activeSection === "skills"
              ? darkMode ? "text-white" : "text-black"
              : darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
          >Skills</a>
          <a
            href="#education"
            onClick={() => scrollTo("education")}
            className={`text-sm font-medium transition-colors ${activeSection === "education"
              ? darkMode ? "text-white" : "text-black"
              : darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
          >Education</a>
          <a
            href="#experiences"
            onClick={() => scrollTo("experiences")}
            className={`text-sm font-medium transition-colors ${activeSection === "experiences"
              ? darkMode ? "text-white" : "text-black"
              : darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
          >Experiences</a>
          <a
            href="#achievements"
            onClick={() => scrollTo("achievements")}
            className={`text-sm font-medium transition-colors ${activeSection === "achievements"
              ? darkMode ? "text-white" : "text-black"
              : darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
          >Achievements</a>
          <a
            href="#projects"
            onClick={() => scrollTo("projects")}
            className={`text-sm font-medium transition-colors ${activeSection === "projects"
              ? darkMode ? "text-white" : "text-black"
              : darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
          >Projects</a>
          <a
            href="#contact"
            onClick={() => scrollTo("contact")}
            className={`text-sm font-medium transition-colors ${activeSection === "contact"
              ? darkMode ? "text-white" : "text-black"
              : darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
          >Contact</a>

          {/* Dark Mode Toggle */}
          <label className="flex items-center cursor-pointer ml-4">
            <div className="relative inline-block w-10 h-6">
              <input type="checkbox" className="absolute opacity-0 w-0 h-0 peer" checked={darkMode} onChange={toggleDarkMode} />
              <span className="absolute inset-0 bg-gray-300 rounded-full transition-colors peer-checked:bg-gray-700" />
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full" />
            </div>
          </label>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden p-2 rounded-md ${darkMode ? "text-white" : "text-black"}`}>  
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className={`lg:hidden mt-2 py-4 ${darkMode ? "bg-black" : "bg-white"}`}>  
          <div className="flex flex-col space-y-3 px-4">
            <a href="#home" onClick={() => scrollTo("home")} className="py-2 text-sm font-medium">Home</a>
            <a href="#skills" onClick={() => scrollTo("skills")} className="py-2 text-sm font-medium">Skills</a>
            <a href="#education" onClick={() => scrollTo("education")} className="py-2 text-sm font-medium">Education</a>
            <a href="#experiences" onClick={() => scrollTo("experiences")} className="py-2 text-sm font-medium">Experiences</a>
            <a href="#achievements" onClick={() => scrollTo("achievements")} className="py-2 text-sm font-medium">Achievements</a>
            <a href="#projects" onClick={() => scrollTo("projects")} className="py-2 text-sm font-medium">Projects</a>
            <a href="#contact" onClick={() => scrollTo("contact")} className="py-2 text-sm font-medium">Contact</a>

            <div className="pt-4 flex items-center">
              <span className={`mr-3 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{darkMode ? "Dark Mode" : "Light Mode"}</span>
              <label className="relative inline-block w-10 h-6">
                <input type="checkbox" className="absolute opacity-0 w-0 h-0 peer" checked={darkMode} onChange={toggleDarkMode} />
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
