'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const pulseAnimation = {
  scale: [1, 1.2, 1],
  opacity: [0.8, 1, 0.8],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/1234567890?text=Hi!%20I%27m%20interested%20in%20starting%20my%2010-day%20free%20trial%20for%20your%20restaurant%20management%20platform.', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full opacity-20"
        animate={pulseAnimation}
      />
      <motion.button
        onClick={handleClick}
        className="relative bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center gap-2 group hover:shadow-green-500/30 hover:shadow-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">
          Chat with us
        </span>
      </motion.button>
    </div>
  );
};

export default WhatsAppButton; 