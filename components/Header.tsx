"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-white dark:bg-gray-800 shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          Visualskill
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Home</Link>
          <Link href="/courses" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Courses</Link>
          <Link href="/internships" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Internships</Link>
          <Link href="/workshops" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Workshops</Link>
          <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300">Contact</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-gray-200 dark:bg-gray-700"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={toggleMenu}
          >
            Menu
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-800 py-2"
        >
          <Link href="/" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900">Home</Link>
          <Link href="/courses" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900">Courses</Link>
          <Link href="/internships" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900">Internships</Link>
          <Link href="/workshops" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900">Workshops</Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900">Contact</Link>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;