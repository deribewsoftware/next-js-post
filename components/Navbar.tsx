"use client";
import { useState } from 'react'
import { FaHome, FaBell, FaMoon, FaSun } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [notificationCount, setNotificationCount] = useState(3) // Example notification count

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark', !darkMode) // Toggle dark mode class on the root
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed top-0 z-50 left-0 w-full bg-white dark:bg-gray-900/90 shadow-md transition-all ease-in-out`}
    >
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        {/* Logo or brand name */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">BrandName</h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#home"
            className="text-gray-800 dark:text-white flex items-center space-x-2 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaHome size={20} />
          </motion.a>

          {/* Notification Icon with Badge */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#notifications"
            className="relative text-gray-800 dark:text-white flex items-center hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaBell size={20} />

            {/* Notification Count Badge */}
            {notificationCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </motion.a>

          {/* Theme toggle */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="text-gray-800 dark:text-white cursor-pointer flex items-center space-x-2"
          >
            {darkMode ? (
              <FaSun size={20} />
            ) : (
              <FaMoon size={20} />
            )}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
