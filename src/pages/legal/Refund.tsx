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

export default function RefundPolicy() {
  const sections = [
    {
      title: 'Refund Policy Overview',
      content: 'At AIFIER, we strive to ensure complete satisfaction with our restaurant management platform. This policy outlines the conditions under which we provide refunds and handle service cancellations.'
    },
    {
      title: 'Trial Period',
      content: 'We offer a 10-day free trial that provides full access to all platform features. During this period, you can evaluate our services without any financial commitment. No credit card is required for the trial period.'
    },
    {
      title: 'Refund Eligibility',
      content: 'We may provide refunds in the following circumstances:\n\n• Service unavailability affecting restaurant operations\n• Billing errors or duplicate charges\n• Technical issues preventing core functionality (menu display, ordering, payments)\n• Cancellation within 48 hours of initial paid subscription'
    },
    {
      title: 'Non-Refundable Items',
      content: 'The following are not eligible for refunds:\n\n• Partial month or unused service time\n• Custom menu design or setup services\n• Successfully processed customer orders\n• Cancellations after the first 48 hours of paid service'
    },
    {
      title: 'Cancellation Process',
      content: 'You may cancel your subscription at any time through your restaurant dashboard or by contacting our support team. Upon cancellation:\n\n• Service access continues until the end of your current billing period\n• No partial refunds are provided for unused time\n• Your menu and order data will be retained for 30 days after cancellation'
    },
    {
      title: 'Refund Process',
      content: 'If eligible for a refund:\n\n• Refunds are processed to the original payment method\n• Processing time is typically 3-5 business days\n• You will receive email confirmation of the refund'
    },
    {
      title: 'Enterprise Restaurants',
      content: 'Restaurant chains or groups with custom contracts are subject to the specific terms outlined in their service agreement. Please refer to your contract or contact your account manager for details.'
    },
    {
      title: 'Plan Changes',
      content: 'When changing your service plan:\n\n• Changes take effect at the next billing cycle\n• No refunds are provided for the remaining period\n• You retain access to your current features until the next billing date'
    },
    {
      title: 'Dispute Resolution',
      content: 'If you believe you are eligible for a refund not covered by this policy, please contact our 24/7 support team. We will review each case individually and strive to reach a fair resolution.'
    },
    {
      title: 'Policy Updates',
      content: 'We reserve the right to modify this policy at any time. Any changes will be communicated via email and/or your restaurant dashboard. Continued use of our services constitutes acceptance of the updated policy.'
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
              Refund & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cancellation</span>
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
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 