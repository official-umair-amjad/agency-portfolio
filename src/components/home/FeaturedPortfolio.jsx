"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const portfolioItems = [
  {
    id: 'project-1',
    title: 'Business Blog Platform',
    category: 'Content Writing',
    image: '/placeholder-1.jpg',
    description: 'A series of in-depth blog articles about business strategy and growth.',
    link: '/portfolio/project-1'
  },
  {
    id: 'project-2',
    title: 'Brand Identity Package',
    category: 'Graphic Design',
    image: '/placeholder-2.jpg',
    description: 'Complete visual identity for a tech startup including logo, colors, and typography.',
    link: '/portfolio/project-2'
  },
  {
    id: 'project-3',
    title: 'Muslim GPT App',
    category: 'Software Development',
    image: '/placeholder-3.jpg',
    description: 'Mobile application with AI-powered responses for Islamic knowledge questions.',
    link: '/portfolio/project-3'
  }
];

const PortfolioItem = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      {/* Placeholder image div with background color until we have actual images */}
      <div className="h-60 bg-gradient-to-r from-indigo-400 to-indigo-600 dark:from-indigo-600 dark:to-indigo-800"></div>
      
      <div className="p-6">
        <span className="text-sm font-medium text-indigo-700 dark:text-indigo-400">{item.category}</span>
        <h3 className="text-xl font-bold mt-1 mb-2 text-gray-800 dark:text-gray-100 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
        <Link href={item.link} className="text-indigo-700 dark:text-indigo-400 font-medium flex items-center hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const FeaturedPortfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Featured Projects</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore some of our best work across content writing, graphic design, and software development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio; 