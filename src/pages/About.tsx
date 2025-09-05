'use client';

import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiAward, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineSparkles, HiOutlineGlobe, HiOutlineChip } from 'react-icons/hi';
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

export default function About() {
  const stats = [
    { number: 'Built for', label: 'F&B businesses across Gulf', icon: <FiUsers className="w-6 h-6" /> },
    { number: '24/7', label: 'Platform Uptime', icon: <HiOutlineChip className="w-6 h-6" /> },
    { number: 'Unlimited', label: 'orders – no hidden fee', icon: <FiTarget className="w-6 h-6" /> },
    { number: '0%', label: 'Commission Fee', icon: <FiTrendingUp className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: 'Restaurant First',
      description: 'Built specifically for restaurants, with features that streamline operations and boost revenue.',
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Customer Success',
      description: "Your success is our success. We're committed to helping restaurants thrive in the digital age.",
      icon: <HiOutlineSparkles className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Zero Commission',
      description: 'Unlike other platforms, we never charge commission on orders. Keep 100% of your sales.',
      icon: <HiOutlineGlobe className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500'
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
              Empowering Restaurants with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Smart Solutions</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-white/90"
            >
              We're on a mission to revolutionize restaurant operations with modern digital solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              AiFier was created with a clear vision: to make advanced restaurant technology simple, accessible, and commission-free. Built for the F&B industry across the Gulf, our platform helps restaurants and cafés run smarter, streamline operations, and focus on creating exceptional dining experiences. What began as a bold idea has grown into a mission to empower food businesses with the digital tools they need to thrive in a fast-changing market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do, from feature development to customer support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${value.color} text-white flex items-center justify-center shadow-lg`}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                A Message from Our Founder
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg"
                >
                  RD
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Ruba Dawood Al Futaisi</h3>
                  <p className="text-blue-600 font-medium">Founder of AiFier</p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  "Restaurants are the heartbeat of our communities. I created AiFier to give F&B businesses across the Gulf the tools they need to run smarter, grow faster, and keep 100% of their hard-earned revenue. Our mission is simple: zero commission, seamless technology, and complete support for restaurants and cafés of every size. With AiFier, we want to make digital operations effortless so you can focus on what matters most: serving your customers."
                </p>
                <div className="flex items-center justify-center gap-4 mt-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src="/founder.jpg" alt="Founder" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">— Ruba Dawood Al Futaisi</div>
                    <div className="text-sm text-gray-600">Founder of AiFier</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
              Join hundreds of businesses already leveraging our AI solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/1234567890?text=Hi!%20I%27m%20interested%20in%20learning%20more%20about%20your%20AI%20solutions.', '_blank')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all inline-flex items-center gap-2 text-lg font-semibold"
              >
                Let's Talk
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/1234567890?text=Hi!%20I%20would%20like%20to%20speak%20with%20an%20AI%20solution%20expert.', '_blank')}
                className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all inline-flex items-center gap-2 text-lg font-semibold"
              >
                Talk to Expert
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 