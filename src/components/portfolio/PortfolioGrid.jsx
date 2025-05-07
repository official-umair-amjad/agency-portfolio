"use client";
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'framer-motion';

const projects = [
  {
    id: 'project-1',
    title: 'Business Blog Platform',
    category: 'Content Writing',
    tags: ['SEO', 'Content Strategy', 'Blogging'],
    image: '/placeholder-1.jpg',
    description: 'A series of in-depth blog articles about business strategy and growth.',
    longDescription: 'This project involved developing a comprehensive content strategy and writing a series of in-depth blog articles focused on business growth strategies. The content was optimized for search engines with careful keyword research and implementation. The articles were designed to establish the client as a thought leader in their industry while driving organic traffic to their site.',
    client: 'TechGrowth Solutions',
    completed: 'January 2023',
    externalLink: 'https://techgrowthsolutions.com/blog'
  },
  {
    id: 'project-2',
    title: 'Brand Identity Package',
    category: 'Graphic Design',
    tags: ['Branding', 'Logo Design', 'Style Guide'],
    image: '/placeholder-2.jpg',
    description: 'Complete visual identity for a tech startup including logo, colors, and typography.',
    longDescription: 'We created a complete brand identity for a tech startup that needed to establish a strong visual presence in a competitive market. The package included logo design with multiple variations, a comprehensive color palette, typography selections, and usage guidelines. The resulting style guide enables consistent branding across all digital and print materials.',
    client: 'InnovateTech',
    completed: 'March 2023'
  },
  {
    id: 'project-3',
    title: 'Muslim GPT App',
    category: 'Software Development',
    tags: ['Mobile App', 'AI', 'React Native'],
    image: '/placeholder-3.jpg',
    description: 'Mobile application with AI-powered responses for Islamic knowledge questions.',
    longDescription: 'This innovative mobile app leverages AI technology to provide accurate responses to questions about Islamic knowledge. We developed the application using React Native for cross-platform functionality, integrated advanced natural language processing, and created an intuitive user interface. The app has been downloaded over 50,000 times since launch.',
    client: 'Islamic Education Foundation',
    completed: 'November 2022',
    externalLink: 'https://muslimgpt.app'
  },
  {
    id: 'project-4',
    title: 'E-commerce Product Descriptions',
    category: 'Content Writing',
    tags: ['E-commerce', 'Copywriting', 'SEO'],
    image: '/placeholder-4.jpg',
    description: 'Compelling product descriptions for an online fashion retailer.',
    longDescription: 'We wrote over 200 unique product descriptions for an online fashion retailer, focusing on creating compelling copy that highlights product features and benefits while incorporating targeted keywords for SEO. The project resulted in a 28% increase in conversion rate and improved search engine rankings for product pages.',
    client: 'StyleHub Fashion',
    completed: 'April 2023'
  },
  {
    id: 'project-5',
    title: 'Marketing Campaign Visuals',
    category: 'Graphic Design',
    tags: ['Social Media', 'Ad Design', 'Campaign'],
    image: '/placeholder-5.jpg',
    description: 'Visual assets for a multi-channel marketing campaign.',
    longDescription: 'For this project, we designed a cohesive set of visual assets for a marketing campaign that spanned social media, web banners, email newsletters, and print materials. The designs maintained brand consistency while being optimized for each platform\'s unique requirements. The campaign achieved a 40% higher engagement rate compared to the client\'s previous campaigns.',
    client: 'Global Marketing Solutions',
    completed: 'June 2023',
    externalLink: 'https://gmsolutions.com/campaign2023'
  },
  {
    id: 'project-6',
    title: 'SaaS Dashboard',
    category: 'Software Development',
    tags: ['Web App', 'UI/UX', 'React'],
    image: '/placeholder-6.jpg',
    description: 'User-friendly dashboard for a SaaS platform with analytics features.',
    longDescription: 'We developed a comprehensive dashboard for a SaaS platform that provides users with real-time analytics, customizable reports, and intuitive data visualization. The interface was built using React with a focus on performance and usability. The new dashboard reduced user support tickets by 45% and improved user retention by 22%.',
    client: 'DataSync Technologies',
    completed: 'May 2023'
  }
];

const categories = ['All', 'Content Writing', 'Graphic Design', 'Software Development'];

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="project-modal"
          onClick={onClose}
        >
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="project-modal-content"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header with close button */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <button 
                onClick={onClose}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal content */}
            <div className="p-6">
              {/* Project image/placeholder */}
              <div className="h-56 md:h-72 bg-gradient-to-r from-indigo-400 to-indigo-600 dark:from-indigo-600 dark:to-indigo-800 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-xl font-bold">{project.category}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Project Description</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.longDescription}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Project Details</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.category}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.client}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Completed</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.completed}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                {project.externalLink && (
                  <a 
                    href={project.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Visit Project
                  </a>
                )}
                <button onClick={onClose} className="btn btn-outline ml-4">
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const PortfolioGrid = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category
                    ? 'bg-indigo-700 dark:bg-indigo-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group transition-colors duration-300"
              >
                {/* Placeholder image with gradient background */}
                <div className="h-48 bg-gradient-to-r from-indigo-300 to-indigo-500 dark:from-indigo-600 dark:to-indigo-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-medium px-4 py-2 rounded-full border border-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      View Project
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-indigo-700 dark:text-indigo-400 mr-2">
                      {project.category}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      {project.tags[0]}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <button 
                    onClick={() => openModal(project)}
                    className="text-indigo-700 dark:text-indigo-400 font-medium flex items-center hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={modalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default PortfolioGrid; 