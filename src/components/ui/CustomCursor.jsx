"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    // Hide the default cursor when our custom cursor is active
    document.body.style.cursor = 'none';
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Add hover detection for interactive elements
    const handleMouseOver = (e) => {
      // Check if the hovered element or its parents have certain classes or are certain elements
      if (
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.service-card') ||
        e.target.closest('input') ||
        e.target.closest('textarea') ||
        e.target.closest('select') ||
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.tagName === 'SELECT'
      ) {
        setIsHovering(true);
        
        // Add a highlight class to the element
        try {
          const element = e.target.closest('a, button, .service-card, input, textarea, select') || e.target;
          element.classList.add('cursor-highlight');
        } catch (error) {
          console.error("Error adding highlight class:", error);
        }
      }
    };
    
    const handleMouseOut = (e) => {
      setIsHovering(false);
      
      // Remove the highlight class from the element
      try {
        const element = e.target.closest('a, button, .service-card, input, textarea, select') || e.target;
        element.classList.remove('cursor-highlight');
      } catch (error) {
        console.error("Error removing highlight class:", error);
      }
    };
    
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
  
  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="custom-cursor"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          scale: isHovering ? 2 : 1.5,
          backgroundColor: isHovering ? 'rgba(251, 191, 36, 0.2)' : 'rgba(251, 191, 36, 0.15)',
          borderColor: isHovering ? 'rgba(251, 191, 36, 0.8)' : 'rgba(251, 191, 36, 0.5)',
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          duration: 0.1
        }}
      />
      
      {/* Small dot at exact cursor position */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          backgroundColor: isHovering ? 'rgba(251, 191, 36, 1)' : 'rgba(251, 191, 36, 0.8)',
        }}
      />
    </>
  );
};

export default CustomCursor; 