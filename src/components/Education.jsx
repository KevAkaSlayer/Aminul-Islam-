import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Education = ({ darkMode }) => {
  const educationData = [
    {
      institution: "University of Creative Technology, Chattogram",
      degree: "BSc in Computer Science",
      duration: "2022 - Present",
      location: "Chattogram, Bangladesh",
      gpa: "Current CGPA 3.71",
      logo: "/placeholder.svg?height=80&width=80",
      courses: [
        "Data Structures & Algorithms",
        "Object Oriented Programming",
        "Database Management System",
        "Discrete Mathematics",
      ],
    },
  ];

  const additionalCourses = [
    { name: "Complete Web Development… (LV1)", institution: "Programming Hero", duration: "2024" },
    { name: "CSE Fundamentals with Phitron", institution: "Phitron", duration: "2023" },
  ];

  return (
    <motion.section
      id="education"
      className={`${darkMode ? "bg-black" : "bg-gray-50"} py-16 font-serif`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-4xl font-bold mb-12 text-center ${darkMode ? "text-white" : "text-gray-900"}`}
          variants={itemVariants}
        >
          Education & Courses
        </motion.h2>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12" variants={containerVariants}>
          {/* University Column */}
          <div className="space-y-6">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className={`p-6 rounded-lg transition-shadow ${darkMode ? "bg-gray-800 hover:shadow-lg" : "bg-white hover:shadow-lg"}`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                      <img src={edu.logo} alt={edu.institution} className="w-16 h-16" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className={`text-2xl font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>{edu.institution}</h3>
                    <p className={`text-xl mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{edu.degree}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-3 text-sm">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-gray-500" />
                        <span className={darkMode ? "text-gray-300" : "text-gray-600"}>{edu.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-gray-500" />
                        <span className={darkMode ? "text-gray-300" : "text-gray-600"}>{edu.location}</span>
                      </div>
                    </div>
                    <p className={`text-lg font-medium mb-4 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>{edu.gpa}</p>
                    <h4 className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Key Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, cidx) => (
                        <motion.span
                          key={cidx}
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-1 rounded-full text-sm transition-colors ${darkMode ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Courses Column */}
          <div className="space-y-6">
            <motion.h3
              className={`text-xl font-bold mb-4 flex items-center ${darkMode ? "text-white" : "text-gray-900"}`}
              variants={itemVariants}
            >
              <GraduationCap size={24} className="mr-2 text-gray-500" /> Additional Courses
            </motion.h3>
            {additionalCourses.map((course, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className={`p-4 rounded-lg transition-shadow ${darkMode ? "bg-gray-800 hover:shadow-lg" : "bg-white hover:shadow-lg"}`}
              >
                <h4 className={`text-lg font-medium mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>{course.name}</h4>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <span className="flex items-center mr-4">
                    <span className="text-gray-500 mr-1">Institution:</span>
                    <span className={darkMode ? "text-gray-300" : "text-gray-600"}>{course.institution}</span>
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-2 text-gray-500" />
                    <span className={darkMode ? "text-gray-300" : "text-gray-600"}>{course.duration}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
