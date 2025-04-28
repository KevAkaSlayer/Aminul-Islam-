import { Zap } from "lucide-react";
import Lottie from "lottie-react";
import skill from "../assets/skills.json";

const Skills = ({ darkMode }) => {
  const skillCategories = [
    { title: "Languages", skills: ["C++", "Python", "JavaScript", "HTML", "CSS", "Tailwind", "Bootstrap"] },
    { title: "Frontend", skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind", "Bootstrap"] },
    { title: "Backend", skills: ["Django", "Node.js", "Express.js", "MySQL", "PostgreSQL", "MongoDB"] },
    { title: "DevOps", skills: ["Git", "GitHub", "Linux"] },
  ];

  const proficientSkills = [
    "C++",
    "Python",
    "JavaScript/React",
    "Algorithmic Problem Solving (ICPC Regionalist)",
    "Data Structures and Algorithms",
    "Competitive Programming",
    "Full Stack Development",
  ];

  return (
    <section id="skills" className={`${darkMode ? "bg-black" : "bg-gray-50"} py-16 font-serif`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? "text-white" : "text-gray-900"}
        `}>
          Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text and Categories */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillCategories.map((category, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl transition-transform transform hover:-translate-y-1 hover:shadow-lg 
                    ${darkMode ? "bg-gray-800" : "bg-white"}`}
                >
                  <h3 className={`${darkMode ? "text-white" : "text-gray-900"} text-xl font-semibold mb-2`}>
                    {category.title}
                  </h3>
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-sm leading-relaxed`}>
                    {category.skills.join(" | ")}
                  </p>
                </div>
              ))}
            </div>

            <div className={darkMode ? "mt-10 border-t border-gray-700 pt-6" : "mt-10 border-t border-gray-200 pt-6"}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}
              `}>
                Proficient In
              </h3>
              <ul className="space-y-3">
                {proficientSkills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-start transition-colors hover:text-gray-500"
                  >
                    <Zap className="flex-shrink-0 mt-1 mr-2 text-gray-500" size={18} />
                    <span className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Animation */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md">
              <Lottie animationData={skill} loop />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
