import { Trophy, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import codeforces from "../assets/codeforces-Photoroom.jpg";
import icpc from "../assets/icpc-Photoroom.jpg";
import web from "../assets/web-Photoroom.jpg";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Achievements = ({ darkMode }) => {
  const achievements = [
    {
      title: "ICPC Regionalist Dhaka 2024",
      image: icpc,
      description:
        "Participated in the prestigious ACM ICPC Dhaka Regional 2024, competing against top university teams.",
      buttons: [{ label: "Certificate", url: "https://drive.google.com/file/d/1QDUGb5FCtHqliq1kBhtgjfnmJ7i3EElJ/view?usp=sharing" }],
    },
    {
      title: "ICPC Regionalist Dhaka 2023",
      image: icpc,
      description:
        "Qualified for and competed in ICPC Dhaka Regional 2023, showcasing strong algorithmic skills.",
      buttons: [{ label: "Certificate", url: "#" }],
    },
    {
      title: "Competitive Programming",
      image: codeforces,
      description:
        "Solved 500+ problems on various online judges, demonstrating advanced problem-solving abilities.",
      buttons: [{ label: "Codeforces", url: "https://codeforces.com/profile/AMIN_AL_ISLAM" }],
    },
    {
      title: "Web Development Projects",
      image: web,
      description:
        "Developed and deployed multiple web applications like Food Fanatic and Wellness Oasis, showcasing full-stack skills.",
      buttons: [{ label: "Projects", url: "#projects" }],
    },
  ];

  const additional = [
    { label: "Current CGPA 3.58", text: "Consistently maintaining academic excellence in CS program" },
    { label: "Web Dev Course", text: "Completed comprehensive web development training" },
    { label: "CSE Fundamentals", text: "Strengthened CS foundations through Phitron training" },
  ];

  return (
    <motion.section
      id="achievements"
      className={`${darkMode ? "bg-black" : "bg-gray-50"} py-16 font-serif`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-4xl font-bold mb-4 text-center flex items-center justify-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          variants={itemVariants}
        >
          <span>Achievements</span>
          <Trophy className={`ml-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`} size={32} />
        </motion.h2>
        <motion.p
          className={`text-center mb-12 ${darkMode ? "text-gray-500" : "text-gray-600"}`}
          variants={itemVariants}
        >
          Recognitions & notable accomplishments
        </motion.p>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" variants={containerVariants}>
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              className={`rounded-lg overflow-hidden ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow transition-transform hover:scale-105 p-6 flex flex-col h-full`}
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={ach.image}
                  alt={ach.title}
                  className="h-24 w-24 object-contain"
                />
              </div>
              <h3 className={`text-lg font-semibold mb-2 text-center ${darkMode ? "text-white" : "text-gray-900"}`}>
                {ach.title}
              </h3>
              <p className={`text-sm mb-4 text-center ${darkMode ? "text-gray-400" : "text-gray-600"}`}> {ach.description}</p>
              <div className="mt-auto flex justify-center">
                {ach.buttons.map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.url}
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      darkMode
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                    }`}
                  >
                    {btn.label}
                    <ExternalLink size={14} className="ml-2" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={`p-6 rounded-lg ${darkMode ? "bg-gray-900/20" : "bg-gray-100"}`} variants={itemVariants}>
          <h3 className={`text-2xl font-bold mb-4 flex items-center ${darkMode ? "text-white" : "text-gray-900"}`}>
            <Award className={`mr-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`} size={24} />
            Additional Recognitions
          </h3>
          <ul className="space-y-3">
            {additional.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <div className={`flex-shrink-0 h-4 w-4 rounded-full mt-1 ${darkMode ? "bg-gray-500" : "bg-gray-600"}`} />
                <p className={`ml-3 text-sm ${darkMode ? "text-gray-400" : "text-gray-700"}`}> 
                  <span className="font-medium">{item.label}</span> - {item.text}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Achievements;
