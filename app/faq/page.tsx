'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import ParticlesBackground from '../components/ParticlesBackground';

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

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'technical', name: 'Technical' },
    { id: 'support', name: 'Support' }
  ];

  const faqs = [
    {
      id: '1',
      category: 'general',
      question: 'What is AIFIER and how does it work?',
      answer: 'AIFIER is a complete restaurant management platform that helps restaurants digitize their operations. Our solution includes digital menus with QR codes, table ordering systems, online ordering for pickup, and a comprehensive admin dashboard - all with zero commission on orders.'
    },
    {
      id: '2',
      category: 'pricing',
      question: 'How does the pricing work?',
      answer: 'We offer transparent, subscription-based pricing with no hidden fees or commissions. Unlike other platforms that charge up to 30% per order, we charge a flat monthly fee. All plans include a 10-day free trial with full access to all features.'
    },
    {
      id: '3',
      category: 'technical',
      question: 'How long does it take to set up?',
      answer: 'Setup typically takes less than 2 hours. We handle everything including menu digitization, QR code generation, and staff training. You can start accepting orders on the same day you sign up.'
    },
    {
      id: '4',
      category: 'support',
      question: 'What kind of support do you offer?',
      answer: 'All customers receive 24/7 technical support via phone, email, and WhatsApp. We also provide comprehensive training for your staff and ongoing assistance with menu updates and system optimization.'
    },
    {
      id: '5',
      category: 'technical',
      question: 'Can I customize my digital menu?',
      answer: 'Yes, you have full control over your menu design and content. You can easily update prices, add/remove items, create special offers, and even support multiple languages. Changes appear instantly across all platforms.'
    },
    {
      id: '6',
      category: 'pricing',
      question: 'Do you really charge zero commission?',
      answer: "Yes, absolutely! We never charge any commission on orders. You keep 100% of your sales. We believe in transparent pricing with a simple monthly subscription that includes all features."
    },
    {
      id: '7',
      category: 'general',
      question: 'What features are included?',
      answer: 'Our platform includes digital menu creation with QR codes, table ordering system, online ordering for pickup, table reservations, integrated payment processing, and a comprehensive admin dashboard for managing orders, inventory, and analytics.'
    },
    {
      id: '8',
      category: 'support',
      question: 'How do I get started?',
      answer: "Getting started is easy! Simply sign up for our 10-day free trial - no credit card required. Our team will help you set up your digital menu, QR codes, and ordering system within hours."
    }
  ];

  const toggleQuestion = (id: string) => {
    setExpandedQuestions(prev =>
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Questions</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-white/90"
            >
              Find answers about our restaurant management platform
            </motion.p>

            {/* Search Bar */}
            <motion.div
              variants={fadeInUp}
              className="relative max-w-2xl mx-auto"
            >
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories and Questions Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: expandedQuestions.includes(faq.id) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedQuestions.includes(faq.id) ? 'auto' : 0,
                      opacity: expandedQuestions.includes(faq.id) ? 1 : 0,
                      marginTop: expandedQuestions.includes(faq.id) ? 16 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 text-left">{faq.answer}</p>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 