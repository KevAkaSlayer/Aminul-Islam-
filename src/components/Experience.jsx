import { Calendar, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import octopusx from "../assets/octopusXPhotoroom.jpg";
import interspeed from "../assets/interspeed-Photoroom.jpg";
import genex from "../assets/genex-Photoroom.jpg";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      title: "Project Manager",
      company: "OctopusX",
      logo: octopusx,
      type: "Full-time",
      duration: "Feb 2025 - Apr 2025",
      location: "Chattogram, Bangladesh",
      onsite: true,
      description: "Led project planning, execution, and monitoring to ensure timely delivery of project milestones.",
      skills: ["Project Management", "Planning", "Team Leadership"],
    },
    {
      title: "Brand Representative",
      company: "Interspeed",
      logo: interspeed,
      type: "Part-time",
      duration: "Jul 2018 - Jul 2019",
      location: "Chattogram, Bangladesh",
      onsite: true,
      description: "Boosted brand awareness and customer engagement by promoting new products, exceeding targets through effective communication.",
      skills: ["Marketing", "Promotions", "Customer Engagement"],
    },
    {
      title: "Customer Service Agent",
      company: "Genex Infosys Ltd.",
      logo: genex,
      type: "Part-time",
      duration: "Feb 2017 - May 2018",
      location: "Chattogram, Bangladesh",
      onsite: true,
      description: "Resolved 100+ customer inquiries daily, diagnosing technical issues to improve satisfaction and retention.",
      skills: ["Customer Service", "Problem Solving", "Communication"],
    },
  ];

  return (
    <motion.section
      id="experiences"
      className={`${darkMode ? "bg-black" : "bg-white"} py-16 font-serif`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-4xl font-bold mb-12 text-center ${darkMode ? "text-white" : "text-gray-900"}`}
          variants={cardVariants}
        >
          Experiences
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-lg overflow-hidden transition-transform ${
                darkMode ? "bg-gray-800/50 hover:shadow-xl" : "bg-gray-100 hover:shadow-xl"
              }`}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Header: grayscale, larger height */}
              <div className={`${darkMode ? "bg-gray-800" : "bg-gray-200"} h-28 flex items-center justify-center relative`}>
                <div className="text-center">
                  <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>{exp.company}</h3>
                  <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>{exp.location}</p>
                </div>
              </div>

              {/* Logo overlapping, pushed further down */}
              <div className="absolute top-22 left-1/2 transform -translate-x-1/2">
                <div className={`w-20 h-20 rounded-full ${darkMode ? "bg-gray-800" : "bg-white"} flex items-center justify-center border-4 border-white overflow-hidden`}>  
                  <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-full" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-20 p-6 flex flex-col h-full">
                <h4 className={`text-xl font-semibold mb-2 text-center ${darkMode ? "text-white" : "text-gray-900"}`}>{exp.title}</h4>

                <p className={`text-sm mb-4 flex items-center justify-center ${darkMode ? "text-gray-400" : "text-gray-600"}`}>  
                  <Briefcase size={14} className="mr-1" /> {exp.type}
                </p>

                <div className="flex justify-center mb-4 space-x-4 text-sm">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1 text-gray-500" />
                    <span className={darkMode ? "text-gray-300" : "text-gray-600"}>{exp.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1 text-gray-500" />
                    <span className={darkMode ? "text-gray-300" : "text-gray-600"}>{exp.onsite ? "On-site" : "Remote"}</span>
                  </div>
                </div>

                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4 flex-grow text-center text-sm`}>{exp.description}</p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {exp.skills.map((skill, sidx) => (
                    <motion.span
                      key={sidx}
                      className={`px-2 py-1 rounded-full text-xs transition-colors ${
                        darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >{skill}</motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
