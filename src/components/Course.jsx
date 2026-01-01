import React from 'react';
import { motion } from 'framer-motion';

const Course = ({ icon, title, description, index }) => {
  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
      },
    },
  };

  const borderColors = [
    'border-pink-500',
    'border-orange-500',
    'border-green-500',
  ];

  const borderColor = borderColors[index % borderColors.length];

  return (
    <motion.div
      className={`border-l-4 ${borderColor} pl-6 mb-8 pb-6 bg-gradient-to-r from-white/10 to-white/5 rounded-xl p-4`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ x: 10, scale: 1.02 }}
    >
      <h3 className="text-3xl font-bold text-gray-900 mb-3">
        {icon} {title}
      </h3>
      <p className="text-gray-800 text-lg">{description}</p>
    </motion.div>
  );
};

export default Course;
