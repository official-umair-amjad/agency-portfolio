"use client";
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TiltCard = ({ 
  children, 
  className = '',
  perspective = 1000,
  tiltMaxAngle = 15,
  tiltReverse = false,
  tiltScale = 1.05,
  transitionSpeed = 400,
  glareEffect = true,
  glareMaxOpacity = 0.2,
  glareColor = "255, 255, 255",
  gyroscope = true
}) => {
  const cardRef = useRef(null);
  const [tiltValues, setTiltValues] = useState({ xPercentage: 0, yPercentage: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Handle device orientation for mobile devices
  useEffect(() => {
    const handleOrientation = (event) => {
      if (!gyroscope || !isHovering) return;
      
      const x = event.gamma; // Range: -90 to 90
      const y = event.beta; // Range: -180 to 180
      
      // Normalize values to -1 to 1
      const xNormalized = Math.min(Math.max(x / 30, -1), 1);
      const yNormalized = Math.min(Math.max(y / 30, -1), 1);
      
      setTiltValues({
        xPercentage: xNormalized,
        yPercentage: yNormalized
      });
    };
    
    if (gyroscope && window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }
    
    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
    };
  }, [gyroscope, isHovering]);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate percentage position (-0.5 to 0.5)
    const xPercentage = (x / rect.width) - 0.5;
    const yPercentage = (y / rect.height) - 0.5;
    
    setTiltValues({
      xPercentage: tiltReverse ? xPercentage : -xPercentage,
      yPercentage: tiltReverse ? -yPercentage : yPercentage
    });
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTiltValues({ xPercentage: 0, yPercentage: 0 });
  };
  
  // Calculate the tilt rotation values
  const tiltX = isHovering ? tiltValues.yPercentage * tiltMaxAngle : 0;
  const tiltY = isHovering ? tiltValues.xPercentage * tiltMaxAngle : 0;
  
  // Calculate the glare position
  const glareX = 100 * (tiltValues.xPercentage + 0.5) + "%";
  const glareY = 100 * (tiltValues.yPercentage + 0.5) + "%";
  const glareOpacity = isHovering ? (Math.sqrt(tiltValues.xPercentage ** 2 + tiltValues.yPercentage ** 2) * glareMaxOpacity) : 0;
  
  // Calculate transformation values directly
  const scale = isHovering ? tiltScale : 1;
  const cardTransform = `scale(${scale})`;
  const innerTransform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  
  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        transform: cardTransform,
        transition: `transform ${transitionSpeed / 1000}s ease-out`,
      }}
    >
      <div
        className="tilt-card-inner relative w-full h-full"
        style={{
          transform: innerTransform,
          transition: `transform ${transitionSpeed / 1000}s ease-out`,
        }}
      >
        {children}
        
        {/* Glare effect */}
        {glareEffect && (
          <div
            className="absolute inset-0 overflow-hidden rounded-inherit pointer-events-none"
            style={{
              borderRadius: 'inherit',
              zIndex: 9999,
              opacity: glareOpacity,
              transition: `opacity ${transitionSpeed / 1000}s ease-out`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(${glareColor}, ${glareMaxOpacity}), rgba(${glareColor}, 0) 80%)`,
                transform: 'translateZ(1px)',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TiltCard; 