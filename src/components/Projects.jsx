"use client"

import { Github, ExternalLink, Code, Star, GitFork } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import food from "../assets/food.png"
import wellness from "../assets/wellness.png"
import pen from "../assets/pen.png"
import chill from "../assets/chill.png"

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
      title: "Chill Gamer: Game Review App",
      description:
        "Chill Gamer is a game review platform where users can authenticate, create full CRUD game reviews, and manage personalized watchlists.",
      features: [
        "Secure Login & Registration",
        "Full CRUD Operations",
        "Personalized WatchList",
        "Featured Slider",
        "Highest Rated Games",
        "Sort & Filter by Rating/Year",
      ],
      image: chill,
      liveLink: "https://teal-froyo-5f7efc.netlify.app/",
      githubLink: "https://github.com/KevAkaSlayer/chill-gamer-client",
    },
    {
      id: 2,
      title: "PenPalette - Blog Platform",
      description:
        "PenPalette is a modern blog platform where users can explore, create, and share blog posts, complete with authentication, CRUD operations, and dynamic features.",
      features: [
        "Secure Email & Google Authentication",
        "Full Blog CRUD Operations",
        "Wishlist & Featured Blogs",
        "Search & Filter Blogs",
        "Protected Private Routes",
      ],
      image: pen,
      liveLink: "https://stunning-gumption-53af0c.netlify.app/",
      githubLink: "https://github.com/KevAkaSlayer/pen-palette-client",
    },  
    {
      id: 3,
      title: "Food Fanatic",
      description:
        "A web application built using Django (MVT) that caters to food enthusiasts. Users can browse and purchase items.",
      features: ["Product Catalog", "Shopping Cart", "Purchase History", "Secure Authentication", "Clean UI"],
      image: food,
      liveLink: "https://foodfanatic.onrender.com",
      githubLink: "https://github.com/KevAkaSlayer/FoodFanatic",
    },
    {
      id: 4,
      title: "Wellness Oasis",
      description:
        "A DRF-based healthcare platform for patient management and appointment booking with modern UI.",
      features: ["User Login", "Patient Management", "Appointment Booking", "Review System", "Responsive Design"],
      image: wellness,
      liveLink: "https://wellness-oasis-clinic-front-end.vercel.app/",
      githubLink: "https://github.com/KevAkaSlayer/Wellness_Oasis_Clinic_FrontEnd",
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="inline-flex items-center text-gray-200 hover:text-gray-400 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="inline-flex items-center text-gray-200 hover:text-gray-400 transition-colors"
                    aria-label="Source Code"
                  >
                    <Github size={18} className="mr-1" /> Code
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>{project.title}</h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm mb-4`}>{project.description}</p>

                <ul className="mb-4 grid grid-cols-2 gap-2 text-xs">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className={`${darkMode ? "text-gray-300" : "text-gray-600"} flex items-start`}> 
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-1 mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className={`flex items-center justify-between text-xs pt-3 border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}> 
                  <div className="flex space-x-4 text-gray-500">
                    <div className="flex items-center"><Star size={14} className="mr-1" />{project.stars}</div>
                    <div className="flex items-center"><GitFork size={14} className="mr-1" />{project.forks}</div>
                  </div>
                  <div className="flex items-center text-gray-500"><Code size={14} className="mr-1" />{project.size}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects;
