import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RegisterForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.input
        type="text"
        placeholder="Parent Name"
        required
        className="w-full px-6 py-4 border-2 border-purple-300 rounded-xl focus:border-purple-600 focus:outline-none transition-colors bg-white/80 text-gray-900 font-semibold placeholder-gray-600"
        whileFocus={{ scale: 1.02 }}
      />
      <motion.input
        type="text"
        placeholder="Child Age"
        required
        className="w-full px-6 py-4 border-2 border-purple-300 rounded-xl focus:border-purple-600 focus:outline-none transition-colors bg-white/80 text-gray-900 font-semibold placeholder-gray-600"
        whileFocus={{ scale: 1.02 }}
      />
      <motion.input
        type="email"
        placeholder="Email"
        required
        className="w-full px-6 py-4 border-2 border-purple-300 rounded-xl focus:border-purple-600 focus:outline-none transition-colors bg-white/80 text-gray-900 font-semibold placeholder-gray-600"
        whileFocus={{ scale: 1.02 }}
      />
      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white py-4 rounded-xl font-bold text-lg hover:from-green-300 hover:to-emerald-400 transition-all shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        ✓ Register Interest
      </motion.button>

      {submitted && (
        <motion.div
          className="p-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl text-center font-bold text-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          🎉 Thank you! We'll be in touch soon.
        </motion.div>
      )}
    </motion.form>
  );
};

export default RegisterForm;
