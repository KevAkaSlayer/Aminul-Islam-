"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const ScrollToTop = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button after scrolling down 300px
  useEffect(() => {
    const onScroll = () => setIsVisible(window.pageYOffset > 300)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            darkMode
              ? "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400"
              : "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-600"
          }`}
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
