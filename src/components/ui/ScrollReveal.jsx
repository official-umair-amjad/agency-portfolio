"use client";
import { useEffect, useRef } from 'react';

const ScrollReveal = ({ 
  children, 
  threshold = 0.1, 
  direction = 'bottom', // 'bottom', 'left', 'right'
  delay = 0,
  duration = 800,
  distance = '30px',
  once = true,
  className = '',
}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add the revealed class to trigger the animation
          ref.current.classList.add('revealed');
          
          // If once is true, unobserve after revealing
          if (once) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          // If once is false, remove the class when out of view
          ref.current.classList.remove('revealed');
        }
      },
      { 
        threshold: threshold,
        rootMargin: '0px'
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);
  
  // Determine the CSS class based on the direction
  const getDirectionClass = () => {
    switch (direction) {
      case 'left':
        return 'reveal-from-left';
      case 'right':
        return 'reveal-from-right';
      case 'bottom':
      default:
        return 'reveal-from-bottom';
    }
  };
  
  // Set the inline style for delay and duration
  const animationStyle = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  };
  
  return (
    <div 
      ref={ref}
      className={`${getDirectionClass()} ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

export default ScrollReveal; 