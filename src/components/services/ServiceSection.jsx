"use client";
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const ServiceSection = ({ id, title, description, features, image, isReversed }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <section id={id} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:grid-flow-dense' : ''}`}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 50 : -50 }}
            transition={{ duration: 0.6 }}
            className={isReversed ? 'md:col-start-2' : ''}
          >
            <h2 className="text-3xl font-bold mb-6 text-indigo-800 dark:text-indigo-400">{title}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{description}</p>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">What We Offer:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-700 dark:text-indigo-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <a href="/contact" className="btn btn-primary">
              Get a Quote
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? -50 : 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={isReversed ? 'md:col-start-1' : ''}
          >
            {/* Placeholder image div with gradient background */}
            <div className="rounded-lg overflow-hidden shadow-xl h-80 bg-gradient-to-r from-indigo-500 to-indigo-700 dark:from-indigo-700 dark:to-indigo-900 flex items-center justify-center text-white text-2xl font-bold">
              {title}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection; 