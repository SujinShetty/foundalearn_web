import React from 'react';
import { motion } from 'framer-motion';

const ListItem = ({ text, index }) => {
  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.li
      className="text-gray-900 mb-4 flex items-start font-semibold text-lg"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className="mr-4 text-2xl">✨</span>
      <span>{text}</span>
    </motion.li>
  );
};

export default ListItem;
