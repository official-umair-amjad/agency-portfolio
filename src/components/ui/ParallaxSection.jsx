"use client";
import { useRef, useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

const ParallaxSection = ({ 
  children,
  className = "",
  bgImage,
  bgColor = "transparent",
  speed = 0.5,
  direction = "down", // "up", "down", "left", "right"
  height = "100vh",
  zIndex = 0,
  overlay = true,
  overlayColor = "rgba(0, 0, 0, 0.4)",
  overlayGradient = "linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.3))",
  withMask = false,
  maskGradient = "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
}) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState('translateY(0%)');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Update dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight
        });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Scroll animation values
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Update transform based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      const multiplier = speed * 100; // Scale for more visible effect
      let transform = '';
      
      switch (direction) {
        case "up":
          transform = `translateY(-${value * multiplier}%)`;
          break;
        case "down":
          transform = `translateY(${value * multiplier}%)`;
          break;
        case "left":
          transform = `translateX(-${value * multiplier}%)`;
          break;
        case "right":
          transform = `translateX(${value * multiplier}%)`;
          break;
        default:
          transform = `translateY(${value * multiplier}%)`;
      }
      
      setTransform(transform);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress, speed, direction]);
  
  // Background style
  const backgroundStyle = {
    backgroundImage: bgImage ? `url(${bgImage})` : 'none',
    backgroundColor: bgColor,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform,
  };
  
  // Overlay style
  const overlayStyle = {
    background: overlayGradient || overlayColor,
  };
  
  // Mask style
  const maskStyle = {
    background: maskGradient,
  };
  
  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden scroll-container ${className}`}
      style={{ height }}
    >
      {/* Parallax background */}
      <div 
        className="parallax-bg"
        style={{
          ...backgroundStyle,
          zIndex: zIndex,
        }}
      />
      
      {/* Optional overlay */}
      {overlay && (
        <div 
          className="absolute inset-0" 
          style={overlayStyle}
        />
      )}
      
      {/* Content container */}
      <div className="relative z-10 h-full w-full flex items-center">
        {children}
      </div>
      
      {/* Optional bottom mask for smooth transitions */}
      {withMask && (
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={maskStyle}
        />
      )}
    </div>
  );
};

export default ParallaxSection; 