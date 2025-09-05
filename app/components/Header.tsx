'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiArrowRight, FiChevronDown, FiX, FiMenu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
  ];

  const legalPages = [
    { name: 'Terms & Conditions', href: '/legal/terms' },
    { name: 'Refund & Cancellation', href: '/legal/refund' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Company Name */}
          <Link href="/" className="group">
            <div className={`font-bold text-2xl sm:text-3xl tracking-tight transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              <span className="font-black">AI</span>
              <span className={`ml-2 ${isScrolled ? 'text-indigo-600' : 'text-indigo-300'}`}>
                FIER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-indigo-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Legal Pages Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsLegalOpen(!isLegalOpen)}
                className={`font-medium transition-colors flex items-center gap-1 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-indigo-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Legal
                <FiChevronDown className={`transition-transform duration-200 ${isLegalOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isLegalOpen ? 1 : 0, y: isLegalOpen ? 0 : 10 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 ${
                  isLegalOpen ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
              >
                {legalPages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="block px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsLegalOpen(false)}
                  >
                    {page.name}
                  </Link>
                ))}
              </motion.div>
            </div>

            <button
              onClick={() => window.open('https://wa.me/1234567890?text=Hi!%20I%27m%20interested%20in%20starting%20my%2010-day%20free%20trial%20for%20your%20restaurant%20solutions.', '_blank')}
              className={`group px-6 py-2.5 rounded-full transition-all flex items-center gap-2 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/30'
                  : 'bg-white text-indigo-600 hover:bg-white/90'
              }`}
            >
              Start Free Trial
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mobile-menu absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl overflow-hidden"
            >
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-6 py-3 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Legal Pages in Mobile Menu */}
                <div className="border-b border-gray-100">
                  <button
                    onClick={() => setIsLegalOpen(!isLegalOpen)}
                    className="w-full px-6 py-3 text-left text-gray-600 hover:text-indigo-600 transition-colors font-medium flex items-center justify-between"
                  >
                    <span>Legal Pages</span>
                    <FiChevronDown className={`transition-transform duration-200 ${isLegalOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isLegalOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {legalPages.map((page) => (
                          <Link
                            key={page.name}
                            href={page.href}
                            className="block px-8 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open('https://wa.me/1234567890?text=Hi!%20I%27m%20interested%20in%20starting%20my%2010-day%20free%20trial%20for%20your%20restaurant%20solutions.', '_blank');
                  }}
                  className="mx-6 my-4 group bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center gap-2 justify-center"
                >
                  Start Free Trial
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 