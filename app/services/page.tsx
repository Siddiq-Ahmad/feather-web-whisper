'use client';

import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlinePresentationChartBar, HiOutlineAcademicCap, HiOutlinePuzzle, HiOutlineSparkles, HiOutlineGlobe, HiOutlineChip, HiOutlineCube } from 'react-icons/hi';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
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

export default function Services() {
  const services = [
    {
      title: 'Digital Menu & QR Codes',
      description: 'Create beautiful, dynamic digital menus with QR codes for contactless ordering and instant bill payments.',
      icon: <HiOutlinePresentationChartBar className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-600',
      features: [
        'Easy menu updates in real-time',
        'Multiple language support',
        'QR code generation',
        'Customizable menu design',
        'Integrated payment system'
      ]
    },
    {
      title: 'Table Ordering System',
      description: 'Streamline dine-in service with a digital table ordering system that reduces wait times and improves accuracy.',
      icon: <HiOutlineAcademicCap className="w-8 h-8" />,
      color: 'from-fuchsia-500 to-purple-600',
      features: [
        'Real-time order tracking',
        'Table status monitoring',
        'Special requests handling',
        'Split bill functionality',
        'Order modification support'
      ]
    },
    {
      title: 'Online Orders & Reservations',
      description: 'Accept online orders for pickup and manage table reservations effortlessly with integrated payment options.',
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Zero commission on orders',
        'Customizable pickup times',
        'Table reservation system',
        'Multiple payment options',
        'Order status notifications'
      ]
    },
    {
      title: 'Admin Dashboard',
      description: 'Comprehensive dashboard to manage orders, reservations, and menu items all in one place.',
      icon: <HiOutlinePuzzle className="w-8 h-8" />,
      color: 'from-blue-500 to-violet-600',
      features: [
        'Sales analytics & reports',
        'Inventory management',
        'Staff performance tracking',
        'Customer database',
        'Marketing tools'
      ]
    }
  ];

  const features = [
    {
      title: 'Zero Commission',
      description: 'Keep 100% of your sales with no hidden fees',
      icon: <HiOutlineChip className="w-6 h-6" />
    },
    {
      title: 'Easy Integration',
      description: 'Set up and running in less than 24 hours',
      icon: <HiOutlineCube className="w-6 h-6" />
    },
    {
      title: 'Real-time Analytics',
      description: 'Track sales and performance metrics instantly',
      icon: <HiOutlineSparkles className="w-6 h-6" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance',
      icon: <HiOutlineGlobe className="w-6 h-6" />
    }
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
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Restaurant</span> Management Solution
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-white/90"
            >
              Transform your restaurant operations with our all-in-one platform. Start free for 10 days.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-slate-50 hover:to-blue-50 transition-all duration-500 border border-gray-100 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of business automation with our comprehensive suite of AI-powered solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get started with our AI solutions today and see the difference
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/1234567890?text=Hi!%20I%27m%20interested%20in%20learning%20more%20about%20your%20AI%20solutions.', '_blank')}
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2 text-lg font-semibold"
              >
                Let's Talk
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => window.open('https://wa.me/1234567890?text=Hi!%20I%20would%20like%20to%20speak%20with%20an%20AI%20solution%20expert.', '_blank')}
                className="group px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all flex items-center gap-2 text-lg font-semibold"
              >
                Talk to Expert
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 