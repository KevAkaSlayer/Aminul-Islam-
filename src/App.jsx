"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Achievements from "./components/Achievements"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import ScrollToTop from "./components/ScrollToTop"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Add scroll reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal")

    const reveal = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active")
        }
      }
    }

    window.addEventListener("scroll", reveal)
    reveal() // Initial check

    return () => window.removeEventListener("scroll", reveal)
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#1a1b26] text-white" : "bg-white text-gray-900"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <div className="container mx-auto px-4 reveal">
          <Banner darkMode={darkMode} />
        </div>
        <div className="reveal">
          <Skills darkMode={darkMode} />
        </div>
        <div className="reveal">
          <Education darkMode={darkMode} />
        </div>
        <div className="reveal">
          <Experience darkMode={darkMode} />
        </div>
        <div className="reveal">
          <Achievements darkMode={darkMode} />
        </div>
        <div className="reveal">
          <Projects darkMode={darkMode} />
        </div>
        <div className="reveal">
          <Contact darkMode={darkMode} />
        </div>
      </main>
      <ScrollToTop darkMode={darkMode} />
    </div>
  )
}

export default App
