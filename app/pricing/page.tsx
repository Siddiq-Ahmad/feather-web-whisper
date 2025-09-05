'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { HiOutlineSparkles, HiOutlineLightBulb, HiOutlineGlobe, HiOutlineShieldCheck } from 'react-icons/hi';
import Link from 'next/link';
import ParticlesBackground from '../components/ParticlesBackground';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Pricing() {
  const benefits = [
    {
      title: "Zero Commission",
      description: "Unlike other platforms that charge up to 30% per order, we charge a simple monthly fee. Keep 100% of your sales.",
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "All-in-One Solution",
      description: "Digital menus, QR ordering, table management, online orders, and reservations - everything you need in one platform.",
      icon: <HiOutlineGlobe className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and assistance to ensure your restaurant operations run smoothly.",
      icon: <HiOutlineShieldCheck className="w-8 h-8" />,
      color: "from-violet-600 to-purple-600"
    }
  ];

  const features = [
    "Digital menu with QR code ordering",
    "Table ordering system",
    "Online ordering for pickup",
    "Table reservations",
    "Admin dashboard",
    "Real-time analytics",
    "Inventory management",
    "Marketing tools"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
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

        <div className="container mx-auto px-4 z-10 py-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            >
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pricing</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-white/90"
            >
              Start with a 10-day free trial. No credit card required.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="h-full p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-slate-50 hover:to-blue-50 transition-all duration-500 border border-gray-100 shadow-lg">
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${benefit.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-white">
                Everything You Need
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Restaurant?</h3>
                <p className="text-gray-300">
                  Start your 10-day free trial today and experience the full platform with all features
                </p>
              </div>
              
              <div className="space-y-6">
                <button
                  onClick={() => window.open('https://wa.me/1234567890?text=Hi!%20I%27m%20interested%20in%20starting%20my%2010-day%20free%20trial%20for%20your%20restaurant%20management%20platform.', '_blank')}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group"
                >
                  Start Free Trial
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => window.open('https://wa.me/1234567890?text=Hi!%20I%20would%20like%20to%20speak%20with%20a%20restaurant%20solutions%20expert%20about%20pricing.', '_blank')}
                  className="w-full px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
                >
                  Talk to an Expert
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 