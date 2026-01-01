// src/components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-700">
              FoundaLearn
            </span>
            <nav className="hidden md:flex space-x-8 ml-10">
              <a  href="#why-us" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Why Us
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                How It Works
              </a>
              <a href="#learning-tracks" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Learning Tracks
              </a>
            </nav>
          </div>
          {/* <a
            href="#register"
            className="btn bg-primary-600 hover:bg-primary-700"
          >
            Get Started
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default Header;