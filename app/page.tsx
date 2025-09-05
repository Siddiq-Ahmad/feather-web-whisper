'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiUsers } from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlinePresentationChartBar, HiOutlineAcademicCap, HiOutlinePuzzle, HiOutlineSparkles, HiOutlineGlobe } from 'react-icons/hi';
import ParticlesBackground from './components/ParticlesBackground';
import LogoCarousel from './components/LogoCarousel';

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

// Loading animation variants
const loadingVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const shimmerAnimation = {
  initial: { backgroundPosition: "-200% 0" },
  animate: { 
    backgroundPosition: "200% 0",
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "linear"
    }
  }
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const skills = [
    {
      title: 'Digital Menu & QR Codes',
      description: 'Create beautiful digital menus with QR codes for contactless ordering and instant bill payments',
      icon: <HiOutlinePresentationChartBar className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-emerald-500 to-teal-600'
    },
    {
      title: 'Table Ordering System',
      description: 'Streamline dine-in service with digital table ordering, reducing wait times and improving accuracy',
      icon: <HiOutlineAcademicCap className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600'
    },
    {
      title: 'Online Orders & Reservations',
      description: 'Accept online orders for pickup and manage table reservations effortlessly with integrated payment options',
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600'
    },
    {
      title: 'Admin Dashboard',
      description: 'Comprehensive dashboard to manage orders, reservations, and menu items all in one place',
      icon: <HiOutlinePuzzle className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-blue-500 to-violet-600'
    }
  ];

  const features = [
    {
      title: 'Zero Commission',
      description: 'Keep 100% of your sales with zero commission on all orders, unlike other platforms that charge up to 30%',
      icon: <HiOutlineSparkles className="w-6 h-6" />,
      stat: '0%',
      statText: 'Commission Fee'
    },
    {
      title: 'Free Trial',
      description: 'Experience all premium features free for 10 days with our no-obligation trial',
      icon: <FiUsers className="w-6 h-6" />,
      stat: '10',
      statText: 'Days Free'
    },
    {
      title: 'ROI Focused',
      description: 'Our solutions help increase order value and table turnover while reducing operational costs',
      icon: <HiOutlineGlobe className="w-6 h-6" />,
      stat: '35%',
      statText: 'Avg. Revenue Increase'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'Owner, Bistro Fresh',
      content: "After the free trial, we were convinced. The digital menu and QR ordering system reduced our wait times by 60% and increased our average order value.",
      image: '/testimonial1.jpg'
    },
    {
      name: 'David Chen',
      role: 'Manager, Asian Fusion',
      content: "The zero commission policy and integrated payment system saved us thousands monthly. The free trial helped us see the real value before committing.",
      image: '/testimonial2.jpg'
    },
    {
      name: 'Emma Thompson',
      role: 'Director, Café Europa',
      content: "We started with the 10-day trial and never looked back. The admin dashboard makes managing orders and reservations a breeze.",
      image: '/testimonial3.jpg'
    }
  ];

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
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

        <div className="container mx-auto px-4 z-10 py-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6"
            >
              🍽️ Start Your 10-Day Free Trial Today
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            >
              Transform Your Restaurant with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Smart Digital Solutions</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-white/90"
            >
              Try our complete restaurant management platform free for 10 days. Zero commission on all orders, forever.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/1234567890?text=Hi!%20I%27m%20interested%20in%20learning%20more%20about%20your%20AI%20solutions.', '_blank')}
                className="group bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center gap-2"
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-bold mb-4 block uppercase tracking-wider text-sm">
              Implementation Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-900">
              Get Started in Three Simple Steps
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Our streamlined process gets your AI chatbot up and running quickly and efficiently
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We analyze your business needs and design the perfect AI solution tailored to your requirements',
                icon: <HiOutlineLightBulb className="w-8 h-8" />
              },
              {
                step: '02',
                title: 'Configuration',
                description: 'Our team sets up and trains your AI chatbot with your business logic and conversation flows',
                icon: <HiOutlineSparkles className="w-8 h-8" />
              },
              {
                step: '03',
                title: 'Launch & Optimize',
                description: 'Go live with your chatbot and receive continuous optimization based on real interactions',
                icon: <HiOutlineGlobe className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="p-8 rounded-2xl bg-white hover:shadow-xl transition-all border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center mb-6 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="text-5xl font-bold text-blue-600/70 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Loading State */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16">
            <span className="text-blue-300 font-bold mb-4 block uppercase tracking-wider text-sm">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              AI-Powered Automation Suite
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive chatbot solutions designed to automate and enhance every aspect of customer interaction
            </p>
          </motion.div>
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  variants={shimmerAnimation}
                  initial="initial"
                  animate="animate"
                  className="h-64 rounded-2xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%]"
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial="initial"
              animate="animate"
              variants={loadingVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                >
                  <div className={`w-16 h-16 ${skill.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">{skill.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{skill.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-blue-300 font-semibold group-hover:text-blue-400 transition-colors"
                  >
                    Learn more
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Add Integration Logos Section before Features */}
      <section className="py-16 bg-gradient-to-br from-slate-100 via-white to-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 mb-8 text-lg font-medium">Trusted by leading platforms and businesses</p>
            <LogoCarousel />
          </motion.div>
        </div>
      </section>

      {/* Features Section with Loading State */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-bold mb-4 block uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              The Aifier Advantage
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Experience the future of customer interaction with our advanced AI solutions
            </p>
          </motion.div>
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  variants={shimmerAnimation}
                  initial="initial"
                  animate="animate"
                  className="h-80 rounded-2xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%]"
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial="initial"
              animate="animate"
              variants={loadingVariants}
              className="grid md:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 group-hover:shadow-xl group-hover:shadow-blue-500/5 transition-all duration-500 border border-gray-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">{feature.description}</p>
                    <div className="border-t border-gray-100 pt-6 group-hover:border-blue-100 transition-colors">
                      <div className="text-3xl font-bold text-blue-600 mb-1 group-hover:text-blue-700 transition-colors">
                        {feature.stat}
                      </div>
                      <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
                        {feature.statText}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-300 font-bold mb-4 block uppercase tracking-wider text-sm">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Client Success Stories
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              See how businesses are transforming with our AI automation solutions
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-blue-400/10 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.name[0]}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                    <p className="text-blue-300 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of businesses already using Aifier's AI solutions to grow their customer base and increase efficiency.
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
