"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const ContactCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <section className="py-20 bg-indigo-700 dark:bg-indigo-900 text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-indigo-100 dark:text-indigo-200 mb-8">
            Let's collaborate to bring your vision to life. Whether you need compelling content, 
            stunning designs, or powerful software solutions, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn bg-white text-indigo-700 dark:bg-gray-100 dark:text-indigo-800 hover:bg-gray-100 dark:hover:bg-white transition-colors">
              Contact Us
            </Link>
            <Link href="/services" className="btn border-2 border-white text-white hover:bg-indigo-800 dark:hover:bg-indigo-800 transition-colors">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA; 