"use client";
import { useRef, useEffect } from 'react';

const ParticleBackground = ({ 
  count = 80,
  color = "#6366f1", 
  size = 3,
  speed = 0.5,
  opacity = 0.3,
  className = "",
  interactive = true,
  connectParticles = true,
  maxConnectDistance = 200
}) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let mousePosition = { x: null, y: null };
    let particles = [];
    
    // Set canvas size with device pixel ratio for sharp rendering
    const setCanvasSize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    
    // Initialize the particles
    const init = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * size + 1;
        particles.push({
          x: Math.random() * canvas.width / dpr,
          y: Math.random() * canvas.height / dpr,
          radius,
          originalRadius: radius,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          color,
          opacity: Math.random() * opacity,
        });
      }
    };
    
    // Draw a single particle
    const drawParticle = (particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
      ctx.fill();
    };
    
    // Connect particles with lines
    const connectParticlesToMouse = (particle, mousePosition, maxDistance) => {
      if (!mousePosition.x || !mousePosition.y) return;
      
      const dx = mousePosition.x - particle.x;
      const dy = mousePosition.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < maxDistance) {
        const opacity = 1 - distance / maxDistance;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(mousePosition.x, mousePosition.y);
        ctx.strokeStyle = `${color}${Math.floor(opacity * 100).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = particle.radius / 2;
        ctx.stroke();
      }
    };
    
    // Connect particles with each other
    const connectTwoParticles = (p1, p2, maxDistance) => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < maxDistance) {
        const opacity = 1 - distance / maxDistance;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `${color}${Math.floor(opacity * 70).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce on edges
        if (particle.x < 0 || particle.x > canvas.width / dpr) {
          particle.vx = -particle.vx;
        }
        if (particle.y < 0 || particle.y > canvas.height / dpr) {
          particle.vy = -particle.vy;
        }
        
        // Interactive effect with mouse
        if (interactive && mousePosition.x && mousePosition.y) {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;
          
          if (distance < maxDistance) {
            // Increase radius when mouse is near
            const scale = 1 + (maxDistance - distance) / maxDistance;
            particle.radius = particle.originalRadius * scale;
            
            // Move particles away from mouse slightly
            const angle = Math.atan2(dy, dx);
            const repelForce = (maxDistance - distance) / maxDistance * 0.5;
            particle.vx -= Math.cos(angle) * repelForce;
            particle.vy -= Math.sin(angle) * repelForce;
          } else {
            // Reset radius
            particle.radius = particle.originalRadius;
          }
        }
        
        // Draw the particle
        drawParticle(particle);
        
        // Connect to mouse
        if (interactive) {
          connectParticlesToMouse(particle, mousePosition, maxConnectDistance);
        }
        
        // Connect to other particles
        if (connectParticles) {
          for (let j = i + 1; j < particles.length; j++) {
            connectTwoParticles(particle, particles[j], maxConnectDistance / 2);
          }
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      init();
    };
    
    // Handle mouse movement
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    
    // Handle mouse leave
    const handleMouseLeave = () => {
      mousePosition = { x: null, y: null };
    };
    
    // Initialize
    setCanvasSize();
    init();
    animate();
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [count, color, size, speed, opacity, interactive, connectParticles, maxConnectDistance]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`w-full h-full ${className}`}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBackground; 