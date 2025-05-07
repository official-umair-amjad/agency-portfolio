"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const FloatingActionButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  const contactOptions = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: '/contact',
      label: 'Contact form',
      delay: 0.1,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      href: 'tel:+1234567890',
      label: 'Call us',
      delay: 0.2,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      href: 'https://wa.me/1234567890',
      label: 'WhatsApp',
      delay: 0.3,
    },
  ];
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* Contact options */}
      <AnimatePresence>
        {isExpanded && (
          <div className="flex flex-col items-end space-y-3">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.6, y: 20 }}
                transition={{ delay: option.delay, duration: 0.2 }}
                className="flex items-center space-x-2"
              >
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: option.delay + 0.1, duration: 0.2 }}
                  className="bg-gray-900 text-white px-3 py-1 rounded-lg shadow-lg text-sm font-medium"
                >
                  {option.label}
                </motion.span>
                <Link 
                  href={option.href} 
                  target={option.href.startsWith('http') ? '_blank' : '_self'} 
                  rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                >
                  {option.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
      
      {/* Main button */}
      <motion.button
        onClick={toggleExpanded}
        className="floating-action-btn"
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isExpanded ? 45 : 0,
          backgroundColor: isExpanded ? '#f59e0b' : '#6366f1'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isExpanded 
              ? "M6 18L18 6M6 6l12 12" 
              : "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            } 
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default FloatingActionButton; 