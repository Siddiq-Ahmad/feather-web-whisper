'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowRight, FiMessageCircle, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function DelayedPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsHidden(true);
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open('https://wa.me/1234567890?text=Hi!%20I%27m%20interested%20in%20starting%20my%2010-day%20free%20trial%20for%20your%20restaurant%20management%20platform.', '_blank');
    handleClose(e);
  };

  if (isHidden) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Premium backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup Container */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6">
            {/* Main Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  mass: 1
                }
              }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-[320px] sm:max-w-[420px] bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Premium close button */}
              <motion.button 
                onClick={handleClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-600 hover:bg-white hover:text-gray-900 transition-all duration-200 z-[70] shadow-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.button>

              <div className="relative z-10">
                {/* Premium header section */}
                <div className="p-4 sm:p-8 pb-3 sm:pb-6">
                  <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg mb-3 sm:mb-4">
                      <FiMessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Ready to Transform Your Restaurant?</h3>
                    <p className="text-sm sm:text-base text-gray-500">Start your 10-day free trial today</p>
                  </div>

                  {/* Premium features grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    {[
                      { icon: "🍽️", text: "Digital Menu & QR" },
                      { icon: "💳", text: "Zero Commission" },
                      { icon: "📱", text: "Online Orders" },
                      { icon: "📊", text: "Full Dashboard" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-50">
                        <span className="text-lg sm:text-xl">{feature.icon}</span>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Premium action section */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 border-t border-gray-100">
                  <motion.button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group font-semibold text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Start Free Trial</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>

                  <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3 text-[10px] sm:text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"></div>
                      <span>No credit card required</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400"></div>
                      <span>10-day free trial</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
} 