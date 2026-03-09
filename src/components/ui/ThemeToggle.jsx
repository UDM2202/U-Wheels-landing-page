import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-gradient-to-r from-yellow-400 to-blue-600 dark:from-yellow-600 dark:to-blue-800 p-1 cursor-pointer overflow-hidden"
      whileTap={{ scale: 0.95 }}
      initial={false}
    >
      <motion.div
        className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-lg flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 28 : 0,
          rotate: theme === 'dark' ? 360 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {theme === 'dark' ? (
          <Moon size={12} className="text-blue-600" />
        ) : (
          <Sun size={12} className="text-yellow-500" />
        )}
      </motion.div>
      
      {/* Background icons */}
      <Sun size={12} className="absolute left-2 top-1.5 text-yellow-300 opacity-50" />
      <Moon size={12} className="absolute right-2 top-1.5 text-blue-300 opacity-50" />
    </motion.button>
  );
};

export default ThemeToggle;