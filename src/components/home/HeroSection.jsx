"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ParticleBackground from '../ui/ParticleBackground';
import ScrollReveal from '../ui/ScrollReveal';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
  // Animated gradient background
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setGradientPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const gradientStyle = {
    background: `radial-gradient(circle at ${gradientPosition.x * 100}% ${gradientPosition.y * 100}%, rgba(99, 102, 241, 0.15), transparent 80%)`,
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden scroll-container">
      {/* Particle Background */}
      <ParticleBackground 
        count={100}
        color="#6366f1"
        size={2}
        speed={0.3}
        opacity={0.3}
        maxConnectDistance={100}
      />
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0" style={gradientStyle}>
        <div className="absolute inset-0 bg-[url('/path-pattern.svg')] opacity-5"></div>
      </div>
      
      {/* Background blob animations - simplified animation values */}
      <motion.div
        className="absolute -right-10 -top-10 w-72 h-72 bg-indigo-800 rounded-full opacity-20 blur-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 0.2, 
          scale: 1,
          x: 10,
          y: -10,
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div
        className="absolute -left-20 bottom-20 w-96 h-96 bg-yellow-600 rounded-full opacity-10 blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 0.1, 
          scale: 1,
          x: -15,
          y: 15,
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-700 rounded-full opacity-5 blur-3xl"
        animate={{
          scale: 1.1,
          opacity: 0.07,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-6 md:px-15 z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y, opacity }}
            className="text-center md:text-left"
          >
            <ScrollReveal>
              <div className="inline-block mb-2 px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-700/30 backdrop-blur-sm">
                <span className="text-indigo-300 text-sm font-medium">Professional Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Digital Presence</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                Content writing, graphic design, and software development solutions 
                tailored to meet your business needs.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/services" 
                  className="interactive-element btn btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10">Explore Services</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500 transition-transform duration-300 group-hover:translate-y-full"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600"></span>
                </Link>
                <Link href="/contact" 
                  className="interactive-element btn btn-outline group relative overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get in Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
            </ScrollReveal>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative h-96 w-full rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm border border-indigo-900/20">
              {/* 3D Tilting Effect Card */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-indigo-800 to-indigo-600 opacity-80"
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: -5,
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              </motion.div>
              
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                <motion.h3 
                  className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  The Travels of Zee
                </motion.h3>
                
                <div className="flex flex-col items-center justify-center">
                  <motion.div 
                    className="flex items-center mb-4 bg-indigo-700/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-indigo-500/30 w-full"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    whileHover={{ 
                      x: 5
                    }}
                    style={{
                      backgroundColor: "rgba(99, 102, 241, 0.3)"
                    }}
                  >
                    <span className="w-3 h-3 bg-indigo-300 rounded-full mr-3"></span>
                    <p className="text-xl">Content Writing</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center mb-4 bg-indigo-700/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-indigo-500/30 w-full"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    whileHover={{ 
                      x: 5
                    }}
                    style={{
                      backgroundColor: "rgba(99, 102, 241, 0.3)"
                    }}
                  >
                    <span className="w-3 h-3 bg-indigo-300 rounded-full mr-3"></span>
                    <p className="text-xl">Graphic Design</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center bg-indigo-700/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-indigo-500/30 w-full"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    whileHover={{ 
                      x: 5
                    }}
                    style={{
                      backgroundColor: "rgba(99, 102, 241, 0.3)"
                    }}
                  >
                    <span className="w-3 h-3 bg-indigo-300 rounded-full mr-3"></span>
                    <p className="text-xl">Software Dev</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p className="text-indigo-300 text-sm mb-2">Scroll to explore</p>
          <motion.div 
            className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center p-1"
            animate={{ y: 4 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <motion.div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 