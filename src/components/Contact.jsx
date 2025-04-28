"use client"

import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram, Twitter, Code } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const Contact = ({ darkMode }) => {
  const socials = [
    { icon: <Code size={20} />, href: "#", label: "Code" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  ]

  return (
    <motion.section
      id="contact"
      className={`${darkMode ? "bg-black" : "bg-gray-50"} py-16 font-serif relative`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="container mx-auto px-4" variants={itemVariants}>
        <motion.h2
          className={`text-4xl font-bold mb-6 text-center ${darkMode ? "text-white" : "text-gray-900"}`}
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className={`text-center mb-12 max-w-2xl mx-auto ${darkMode ? "text-gray-500" : "text-gray-600"}`}
          variants={itemVariants}
        >
          If you want to hire me or have other queries, feel free to reach out—I'll reply within 24 hours.
        </motion.p>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" variants={containerVariants}>
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Get In Touch</h3>
              <div className="space-y-4">
                {[
                  { icon: <Mail size={24} />, text: "aminalislam4223@gmail.com", href: "mailto:aminalislam4223@gmail.com" },
                  { icon: <Phone size={24} />, text: "+880 1634 230925", href: "tel:+8801634230925" },
                  { icon: <MapPin size={24} />, text: "Chattogram, Bangladesh" },
                ].map((item, i) => (
                  <motion.div key={i} className="flex items-center" variants={itemVariants}>
                    <div className={`mr-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{item.icon}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`text-lg transition-colors ${darkMode ? "text-gray-300 hover:text-gray-400" : "text-gray-700 hover:text-gray-900"}`}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Connect With Me</h3>
              <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className={`p-3 rounded-full transition-colors ${
                      darkMode
                        ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {s.icon}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="order-1 lg:order-2 flex justify-center" variants={itemVariants}>
            <div className="relative w-64 h-64">
              <div className={`absolute top-0 right-0 w-16 h-16 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} opacity-30`} />
              <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} opacity-30`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-48 h-48 border-4 rounded-lg relative flex items-center justify-center ${
                    darkMode ? "border-gray-700" : "border-gray-300"
                  }`}
                >
                  <div className={`absolute top-0 right-0 w-4 h-4 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`} />
                  <div className={`absolute bottom-0 left-0 w-4 h-4 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`} />
                  <div className={`w-32 h-24 ${darkMode ? "bg-gray-800" : "bg-gray-200"} clip-path-message`} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="text-center mt-16" variants={itemVariants}>
          <p className={`${darkMode ? "text-gray-500" : "text-gray-600"}`}>Thank you for visiting my portfolio.</p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Contact;