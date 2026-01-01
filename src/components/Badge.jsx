import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ text, index }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const colors = [
    'bg-gradient-to-r from-pink-300 to-rose-400 text-gray-900',
    'bg-gradient-to-r from-orange-300 to-yellow-400 text-gray-900',
    'bg-gradient-to-r from-green-300 to-emerald-400 text-gray-900',
    'bg-gradient-to-r from-blue-300 to-cyan-400 text-gray-900',
    'bg-gradient-to-r from-purple-300 to-indigo-400 text-gray-900',
  ];

  const color = colors[index % colors.length];

  return (
    <motion.span
      className={`inline-block ${color} px-5 py-3 rounded-full text-sm font-bold m-2 shadow-lg`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.15, rotate: 5 }}
    >
      {text}
    </motion.span>
  );
};

export default Badge;
