"use client"

import { Github, ExternalLink, Code, Star, GitFork } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const Projects = ({ darkMode }) => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Food Fanatic",
      description:
        "A web application built using Django (MVT) that caters to food enthusiasts. Users can browse and purchase items.",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Purchase History",
        "Secure Authentication",
        "Clean UI",
      ],
      image: "/placeholder.svg?height=300&width=500",
      language: "Python",
      stars: 12,
      forks: 5,
      size: "2.3 MB",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Wellness Oasis",
      description:
        "A DRF-based healthcare platform for patient management and appointment booking with modern UI.",
      features: [
        "User Login",
        "Patient Management",
        "Appointment Booking",
        "Review System",
        "Responsive Design",
      ],
      image: "/placeholder.svg?height=300&width=500",
      language: "Python",
      stars: 8,
      forks: 3,
      size: "1.8 MB",
      liveLink: "#",
      githubLink: "#",
    },
    // Placeholder projects
    {
      id: 3,
      title: "Project 3",
      description: "Details coming soon...",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      image: "/placeholder.svg?height=300&width=500",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      size: "0 KB",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Details coming soon...",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      image: "/placeholder.svg?height=300&width=500",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      size: "0 KB",
      liveLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <motion.section
      id="projects"
      className={`${darkMode ? "bg-black" : "bg-gray-50"} py-16 font-serif`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-4xl font-bold mb-12 text-center ${darkMode ? "text-white" : "text-gray-900"}`}
          variants={cardVariants}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`rounded-lg overflow-hidden border transition-transform duration-300 ${
                darkMode
                  ? "bg-gray-800/20 border-gray-700 hover:shadow-lg hover:scale-105"
                  : "bg-white border-gray-200 hover:shadow-lg hover:scale-105"
              } relative group`}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4"
                >
                  <a
                    href={project.liveLink}
                    className="inline-flex items-center text-gray-200 hover:text-gray-400 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="inline-flex items-center text-gray-200 hover:text-gray-400 transition-colors"
                    aria-label="Source Code"
                  >
                    <Github size={18} className="mr-1" /> Code
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>{project.title}</h3>
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${
                      darkMode ? "bg-gray-400" : "bg-gray-400"
                    }`} 
                    aria-label={project.language}
                  />
                </div>

                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm mb-4`}>{project.description}</p>

                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Key Features</h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1 list-none">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`text-xs flex items-start ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mt-1 mr-1.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="flex items-center justify-between text-xs pt-3 border-t"
                  style={{ borderColor: darkMode ? "#333" : "#e2e8f0" }}
                >
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center">
                      <Star size={14} className="mr-1" /> {project.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork size={14} className="mr-1" /> {project.forks}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Code size={14} className="mr-1" /> {project.size}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            MORE PROJECTS
          </button>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects;
