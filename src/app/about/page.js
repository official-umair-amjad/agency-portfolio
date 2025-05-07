"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/layout/Header';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  return (
    <MainLayout>
      <div ref={ref} className="relative scroll-container">
        <PageHeader 
          title="About Us" 
          description="Get to know our story, our mission, and our values"
        />
        
        <div className="relative overflow-hidden">
          {/* Background Texture */}
          <motion.div 
            className="absolute inset-0 bg-[url('/texture-dark.png')] opacity-5 pointer-events-none"
            style={{ y: backgroundY }}
          />
          
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-indigo-900/20 to-transparent opacity-70 pointer-events-none"></div>
          
          <div className="container mx-auto px-6 py-12 relative z-10">
            {/* About Section */}
            <ScrollReveal>
              <div className="max-w-4xl mx-auto mb-20">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-900/50 text-indigo-300 rounded-full border border-indigo-700/30 mb-4">Our Journey</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Crafting Digital Excellence</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Welcome to <span className="text-indigo-400 font-medium">The Travels of Zee</span>, where creativity meets strategy to elevate your digital presence. 
                  Our comprehensive services in content writing, graphic design, and software development provide tailored solutions that drive growth 
                  and enhance your brand's online impact.
                </p>
              </div>
            </ScrollReveal>
            
            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              <ScrollReveal direction="left" delay={100}>
                <div className="bg-indigo-900/30 backdrop-blur-sm p-8 rounded-xl border border-indigo-700/30 hover:border-indigo-500/50 transition-all duration-300 h-full group">
                  <div className="w-16 h-16 bg-indigo-800/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-700 transition-colors duration-300">
                    <svg className="w-8 h-8 text-indigo-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 4l3.74 4h-3a.79.79 0 0 1-.74-.85z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors duration-300">Content Writing</h3>
                  <p className="text-gray-300">
                    Compelling narratives that engage your audience and communicate your brand's 
                    message clearly and effectively.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="bg-indigo-900/30 backdrop-blur-sm p-8 rounded-xl border border-indigo-700/30 hover:border-indigo-500/50 transition-all duration-300 h-full group">
                  <div className="w-16 h-16 bg-indigo-800/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-700 transition-colors duration-300">
                    <svg className="w-8 h-8 text-indigo-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zM3 3v2h18V3H3z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors duration-300">Graphic Design</h3>
                  <p className="text-gray-300">
                    Visually stunning designs that capture attention and convey your brand identity
                    across all digital and print platforms.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={300}>
                <div className="bg-indigo-900/30 backdrop-blur-sm p-8 rounded-xl border border-indigo-700/30 hover:border-indigo-500/50 transition-all duration-300 h-full group">
                  <div className="w-16 h-16 bg-indigo-800/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-700 transition-colors duration-300">
                    <svg className="w-8 h-8 text-indigo-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5V22H17c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors duration-300">Software Development</h3>
                  <p className="text-gray-300">
                    Custom software solutions that streamline processes, enhance user experiences,
                    and drive business growth.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Our Story */}
            <ScrollReveal>
              <div className="max-w-4xl mx-auto mb-24">
                <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/20 p-8 md:p-10 rounded-2xl border border-indigo-700/30">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-900/50 text-indigo-300 rounded-full border border-indigo-700/30 mb-4">Our Story</span>
                  <h2 className="text-3xl font-bold mb-6 text-white">How It All Started</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    The Travels of Zee was born from a passion for creative excellence and digital innovation. 
                    Our journey began with a simple mission: to help businesses thrive in the digital landscape 
                    through exceptional content, design, and technology solutions.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    What started as a small team of dedicated professionals has grown into a dynamic agency 
                    that combines creative expertise with technical knowledge to deliver results that exceed 
                    expectations.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Mission & Values */}
            <div className="grid md:grid-cols-2 gap-10 mb-24">
              <ScrollReveal direction="left">
                <div className="bg-indigo-900/30 backdrop-blur-sm p-8 rounded-xl border border-indigo-700/30 h-full">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-900/50 text-indigo-300 rounded-full border border-indigo-700/30 mb-4">Our Mission</span>
                  <h2 className="text-2xl font-bold mb-6 text-white">What Drives Us</h2>
                  <p className="text-gray-300 mb-6">
                    Our mission is to empower businesses with creative and technical solutions that enhance 
                    their digital presence, drive engagement, and foster growth.
                  </p>
                  <p className="text-gray-300">
                    We believe in the power of storytelling, visual communication, and technological innovation 
                    to transform how businesses connect with their audiences and achieve their goals.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <div className="bg-indigo-900/30 backdrop-blur-sm p-8 rounded-xl border border-indigo-700/30 h-full">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-900/50 text-indigo-300 rounded-full border border-indigo-700/30 mb-4">Our Values</span>
                  <h2 className="text-2xl font-bold mb-6 text-white">What We Stand For</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-indigo-700 flex items-center justify-center mt-1 mr-3">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <p className="text-gray-300"><span className="text-indigo-300 font-medium">Excellence:</span> We strive for excellence in every project, detail, and interaction.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-indigo-700 flex items-center justify-center mt-1 mr-3">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <p className="text-gray-300"><span className="text-indigo-300 font-medium">Innovation:</span> We embrace creativity and innovation to solve complex challenges.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-indigo-700 flex items-center justify-center mt-1 mr-3">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <p className="text-gray-300"><span className="text-indigo-300 font-medium">Collaboration:</span> We believe in the power of teamwork and partnership.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-indigo-700 flex items-center justify-center mt-1 mr-3">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <p className="text-gray-300"><span className="text-indigo-300 font-medium">Integrity:</span> We uphold the highest standards of honesty and transparency.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-indigo-700 flex items-center justify-center mt-1 mr-3">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <p className="text-gray-300"><span className="text-indigo-300 font-medium">Results-driven:</span> We focus on delivering measurable outcomes for our clients.</p>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Why Choose Us */}
            <ScrollReveal>
              <div className="max-w-4xl mx-auto mb-16">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-900/50 text-indigo-300 rounded-full border border-indigo-700/30 mb-4">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Difference</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-700/30 group hover:bg-indigo-900/30 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-3 text-indigo-300">Personalized Approach</h3>
                    <p className="text-gray-300">
                      We take the time to understand your unique challenges and goals, crafting solutions 
                      that are tailored to your specific needs.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-700/30 group hover:bg-indigo-900/30 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-3 text-indigo-300">End-to-End Solutions</h3>
                    <p className="text-gray-300">
                      From concept to execution, we provide comprehensive services that cover all aspects 
                      of your digital presence.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-700/30 group hover:bg-indigo-900/30 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-3 text-indigo-300">Experienced Team</h3>
                    <p className="text-gray-300">
                      Our diverse team of experts brings years of experience and a wealth of knowledge 
                      to each project.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-700/30 group hover:bg-indigo-900/30 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-3 text-indigo-300">Continuous Innovation</h3>
                    <p className="text-gray-300">
                      We stay ahead of industry trends and technological advancements to deliver 
                      cutting-edge solutions.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* CTA */}
            <ScrollReveal>
              <div className="bg-gradient-to-r from-indigo-800 to-purple-800 p-10 md:p-16 rounded-2xl text-center max-w-4xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-dots.png')] opacity-10"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative z-10">Ready to Start Your Journey?</h2>
                <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                  Let's collaborate to bring your vision to life and create digital experiences that 
                  drive engagement and growth.
                </p>
                <Link href="/contact" className="interactive-element btn btn-primary inline-block px-8 py-4 bg-white text-indigo-800 font-medium rounded-full hover:bg-indigo-100 transition-colors duration-300 relative z-10">
                  Get in Touch
                </Link>
                
                <motion.div 
                  className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-600/30 rounded-full blur-xl"
                  animate={{
                    scale: 1.1,
                    opacity: 0.3,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div 
                  className="absolute -left-10 -top-10 w-40 h-40 bg-purple-600/30 rounded-full blur-xl"
                  animate={{
                    scale: 1.2,
                    opacity: 0.25,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage; 