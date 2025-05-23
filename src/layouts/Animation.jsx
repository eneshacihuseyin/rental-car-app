import React from 'react';
import { motion } from 'framer-motion';

function Animation({ children }) {
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.01 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default Animation;
