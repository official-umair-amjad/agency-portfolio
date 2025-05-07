import Link from 'next/link';
import { motion } from 'framer-motion';
import TiltCard from '../ui/TiltCard';

const ServiceCard = ({ service }) => {
  const { title, description, icon: Icon, slug } = service;

  return (
    <TiltCard 
      className="h-full"
      perspective={1000}
      tiltMaxAngle={10}
      glareEffect={true}
      glareMaxOpacity={0.15}
      tiltScale={1.03}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="interactive-element relative bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden cursor-highlight h-full"
      >
        <div className="p-6 h-full flex flex-col">
          <div className="w-12 h-12 rounded-full bg-indigo-800 flex items-center justify-center mb-4 shine-effect">
            <Icon className="h-6 w-6 text-indigo-200" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 mb-4 flex-grow">{description}</p>
          <Link
            href={`/services#${slug}`}
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mt-auto"
          >
            <span className="relative overflow-hidden group">
              <span className="relative z-10 inline-flex items-center">
                Learn more
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </div>
      </motion.div>
    </TiltCard>
  );
};

export default ServiceCard; 