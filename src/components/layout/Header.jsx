"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="relative flex items-center">
          <Image 
            src="/our Identity/TTZ Logo black text without slogan (Website).png" 
            alt="The Travels of Zee Logo" 
            width={180} 
            height={80} 
            className="h-auto w-auto object-contain invert brightness-200 hue-rotate-180"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors">
            About
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            className="text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900 py-4 px-4 shadow-lg"
        >
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors" onClick={toggleMenu}>
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 