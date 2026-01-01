import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  const gradients = [
    'from-pink-400 to-rose-500',
    'from-orange-400 to-red-500',
    'from-green-400 to-emerald-500',
    'from-blue-400 to-cyan-500',
    'from-purple-400 to-indigo-500',
    'from-yellow-300 to-orange-400',
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      className={`bg-gradient-to-br ${gradient} rounded-3xl p-8 mb-6 shadow-2xl backdrop-blur-sm border-2 border-white/20`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="bg-white/95 rounded-2xl p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default Section;
