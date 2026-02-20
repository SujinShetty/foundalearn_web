// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-gray-900">Smarter Early Learning</span>{' '}
            <span className="text-primary-600">for Your Child</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Early screening + personalized learning paths for children aged <span className="font-bold text-primary-700">3–8 years</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <a href="#register" className="btn">
              Check My Child's Readiness
            </a>
            <a  href="#how-it-works" className="btn btn-outline text-primary-600 border-primary-600 hover:bg-primary-50">
              Learn How It Works
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-primary-300/30 w-64 h-64 rounded-full filter blur-3xl"></div>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Happy children learning"
                className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;