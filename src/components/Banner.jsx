import { Github, Linkedin, Mail, Facebook, Instagram, Twitter, Code } from "lucide-react";
import Lottie from "lottie-react";
import bannerLottie from "../assets/banner.json";

const Banner = ({ darkMode }) => {
  const socialLinks = [
    { icon: <Code size={20} />, href: "#", label: "Code" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <Mail size={20} />, href: "mailto:aminalislam4223@gmail.com", label: "Email" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  ];

  return (
    <section id="home" className="py-16 md:py-24 font-serif">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className={`${darkMode ? 'text-white' : 'text-black'}`}>Aminul Islam</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4">
            Computer Science Student | ICPC Regionalist | Web Developer
          </p>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            BSc in Computer Science at University of Creative Technology, Chattogram | Competitive Programmer | Full
            Stack Developer with expertise in React, Django, and Node.js
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                aria-label={link.label}
                className={`p-3 rounded-full transition-colors ${
                  darkMode
                    ? 'bg-gray-800 text-gray-200 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-400'
                }`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className={`inline-block px-8 py-3 font-medium rounded-md transition-colors ${
              darkMode
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            CONTACT ME
          </a>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <Lottie
              animationData={bannerLottie}
              loop={true}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
