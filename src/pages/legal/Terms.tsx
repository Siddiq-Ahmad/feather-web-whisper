'use client';

import { motion } from 'framer-motion';
import ParticlesBackground from '../../components/ParticlesBackground';

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

export default function Terms() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using AIFIER\'s services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services.'
    },
    {
      title: 'Service Description',
      content: 'AIFIER provides a comprehensive restaurant management platform including digital menu creation, QR code ordering, table ordering systems, online ordering for pickup, and administrative tools. Our services are provided "as is" and may be updated or modified at our discretion.'
    },
    {
      title: 'User Obligations',
      content: 'You agree to use our services only for lawful restaurant operations and in accordance with these terms. You must maintain accurate menu information, pricing, and ensure proper handling of customer orders and data. You must not use our services for any fraudulent or unauthorized purposes.'
    },
    {
      title: 'Data Privacy & Security',
      content: 'We implement industry-standard security measures to protect your restaurant and customer data. You retain ownership of your menu data, customer information, and sales data. We will not share this information with third parties without your consent, except as required for payment processing and order fulfillment.'
    },
    {
      title: 'Intellectual Property',
      content: 'All intellectual property rights in our platform, including software, designs, and content, remain our property. You receive a limited, non-exclusive license to use our services for your restaurant operations. Your restaurant\'s branding, menu content, and images remain your property.'
    },
    {
      title: 'Service Availability',
      content: 'While we strive for 24/7 availability to ensure uninterrupted restaurant operations, we may perform maintenance during off-peak hours. We provide advance notice for scheduled maintenance and immediate support for any service interruptions.'
    },
    {
      title: 'Payment Terms',
      content: 'Subscription fees are billed monthly according to your chosen plan. We charge zero commission on orders processed through our platform. The 10-day free trial provides full access to all features. After the trial, regular subscription fees apply unless cancelled.'
    },
    {
      title: 'Limitation of Liability',
      content: 'To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, including but not limited to lost profits or business interruption.'
    },
    {
      title: 'Term and Termination',
      content: 'These terms remain in effect while you use our services. The free trial period lasts 10 days from activation. We may terminate or suspend your access immediately if you violate these terms. You may cancel your subscription at any time without penalty.'
    },
    {
      title: 'Changes to Terms',
      content: 'We may modify these terms at any time. We will notify you of material changes via email or through our platform. Your continued use of our services after such modifications constitutes acceptance of the updated terms.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          <ParticlesBackground />
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
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Conditions</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-white/90"
            >
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-12 last:mb-0"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {index + 1}. {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 