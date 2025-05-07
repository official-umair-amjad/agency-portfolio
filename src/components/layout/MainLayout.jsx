"use client";
import Header from './Header';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';
import FloatingActionButton from '../ui/FloatingActionButton';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MainLayout = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Only load the cursor and client-side features after mounting
  useEffect(() => {
    setIsMounted(true);
    
    // Simulate loading time and then hide loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    // Add smooth scrolling behavior for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      // Check if it's an internal anchor link
      if (target.hash && target.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Offset for header
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <AnimatePresence>
        {isLoading && isMounted && (
          <motion.div 
            className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 relative">
              <div className="w-16 h-16 rounded-full border-t-4 border-b-4 border-indigo-500 animate-spin"></div>
              <div className="w-16 h-16 rounded-full border-r-4 border-l-4 border-indigo-300 animate-spin absolute top-0 left-0" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      
      {/* Client-side only components */}
      {isMounted && (
        <>
          <CustomCursor />
          <FloatingActionButton />
        </>
      )}
    </div>
  );
};

export default MainLayout; 