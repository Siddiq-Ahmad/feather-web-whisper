'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import ParticlesBackground from './components/ParticlesBackground';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function NotFound() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          <ParticlesBackground />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full blur-3xl opacity-20"
          ></motion.div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="text-9xl font-bold text-white mb-8"
            >
              404
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Not Found</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/80 mb-12"
            >
              Oops! The page you're looking for doesn't exist or has been moved.
            </motion.p>
            <motion.div
              variants={fadeInUp}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all text-lg font-semibold group"
              >
                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 