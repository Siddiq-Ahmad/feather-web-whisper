'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    src: '/logos/whatsapp-business.png',
    alt: 'WhatsApp Business',
    width: 140,
    class: 'hover:scale-110'
  },
  {
    src: '/logos/instagram.png',
    alt: 'Instagram',
    width: 120,
    class: 'hover:scale-105 hover:rotate-6'
  },
  {
    src: '/logos/messenger.png',
    alt: 'Messenger',
    width: 130,
    class: 'hover:scale-110 hover:-rotate-6'
  },
  {
    src: '/logos/telegram.png',
    alt: 'Telegram',
    width: 120,
    class: 'hover:scale-105'
  },
  {
    src: '/logos/slack.png',
    alt: 'Slack',
    width: 110,
    class: 'hover:scale-110 hover:rotate-6'
  },
  {
    src: '/logos/microsoft.png',
    alt: 'Microsoft',
    width: 130,
    class: 'hover:scale-105'
  },
  {
    src: '/logos/google.png',
    alt: 'Google',
    width: 120,
    class: 'hover:scale-110'
  },
  {
    src: '/logos/meta.png',
    alt: 'Meta',
    width: 100,
    class: 'hover:scale-105 hover:-rotate-6'
  }
];

const LogoCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-slate-50/50 via-white to-slate-50/50 py-12">
      <div className="flex items-center">
        <motion.div
          className="flex items-center gap-8 md:gap-24 px-4 md:px-12"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={`${logo.alt}-1-${index}`}
              className={`flex items-center justify-center transition-all duration-300 ${logo.class}`}
              style={{ minWidth: logo.width }}
              whileHover={{ y: -5 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={50}
                className="object-contain h-12 md:h-14 drop-shadow-sm hover:drop-shadow-xl transition-all duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <motion.div
              key={`${logo.alt}-2-${index}`}
              className={`flex items-center justify-center transition-all duration-300 ${logo.class}`}
              style={{ minWidth: logo.width }}
              whileHover={{ y: -5 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={50}
                className="object-contain h-12 md:h-14 drop-shadow-sm hover:drop-shadow-xl transition-all duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-slate-50 via-slate-50/95 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-slate-50 via-slate-50/95 to-transparent z-10"></div>
    </div>
  );
};

export default LogoCarousel;