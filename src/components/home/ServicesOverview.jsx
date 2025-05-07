"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import ServiceCard from '../services/ServiceCard';

const services = [
  {
    id: 'content-writing',
    title: 'Content Writing',
    description: 'Engaging, SEO-optimized content for your website, blog, and marketing materials.',
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={props.className || "h-12 w-12 text-indigo-400"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    slug: 'content-writing'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: "Eye-catching visuals and branding elements that capture your company's essence.",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={props.className || "h-12 w-12 text-indigo-400"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    slug: 'graphic-design'
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Custom mobile and web applications built with the latest technologies.',
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={props.className || "h-12 w-12 text-indigo-400"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    slug: 'software-development'
  }
];

const ServicesOverview = () => {
  const ref = useRef(null);
  
  return (
    <section className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-700/30">
              <span className="text-indigo-300 text-sm font-medium">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive solutions to help your business thrive in the digital landscape.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              delay={index * 150} 
              direction={index % 2 === 0 ? 'bottom' : 'left'}
            >
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview; 