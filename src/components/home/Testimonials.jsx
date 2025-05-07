"use client";
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "The content writing team at The Travels of Zee produced exceptional blog articles that increased our organic traffic by 45% within three months. Their attention to detail and SEO knowledge is outstanding.",
    author: "Sarah Johnson",
    position: "Marketing Director, TechFirm",
    image: "/placeholder-avatar-1.jpg"
  },
  {
    id: 2,
    content: "We hired them for our complete brand redesign and couldn't be happier with the results. The new visual identity perfectly captures our company's values and has been instrumental in attracting new clients.",
    author: "Michael Chen",
    position: "CEO, Innovation Studios",
    image: "/placeholder-avatar-2.jpg"
  },
  {
    id: 3,
    content: "The mobile app they developed for us has transformed how we engage with our customers. The development process was smooth, and they delivered right on schedule without compromising on quality.",
    author: "Aisha Rahman",
    position: "Product Manager, Fintech Solutions",
    image: "/placeholder-avatar-3.jpg"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });
  
  const nextTestimonial = () => {
    setCurrent(current => (current + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrent(current => (current - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index) => {
    setCurrent(index);
  };
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      nextTestimonial();
    }, 6000);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current]);
  
  return (
    <section className="py-20 bg-indigo-50 dark:bg-indigo-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">What Our Clients Say</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it – hear from some of our satisfied clients.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-xl relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="p-8 md:p-12 absolute top-0 left-0 w-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === current ? 1 : 0,
                  x: index === current ? 0 : 100,
                  zIndex: index === current ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
                style={{ 
                  display: index === current ? 'block' : 'none' 
                }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    {/* Placeholder avatar */}
                    <div className="w-20 h-20 rounded-full bg-indigo-200 dark:bg-indigo-700 flex items-center justify-center">
                      <span className="text-2xl font-bold text-indigo-700 dark:text-indigo-200">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <p className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-6 font-accent">
                      "{testimonial.content}"
                    </p>
                    <h4 className="font-bold text-lg text-gray-800 dark:text-white">{testimonial.author}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Empty div to maintain height */}
            <div className="p-8 md:p-12 invisible">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20"></div>
                </div>
                <div className="flex-grow">
                  <p className="text-lg md:text-xl mb-6">&nbsp;</p>
                  <h4 className="text-lg">&nbsp;</h4>
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? 'bg-indigo-700 dark:bg-indigo-400' : 'bg-indigo-200 dark:bg-indigo-800'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 