'use client';

import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
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
    <footer className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 pt-20 pb-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About & Company Name */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="font-bold text-2xl md:text-3xl tracking-tight">
                <span className="text-white font-black">AI</span>
                <span className="text-indigo-400 ml-2">FIER</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming businesses with intelligent AI automation. Our chatbots help companies provide better customer service, increase sales, and reduce operational costs.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, color: 'hover:bg-blue-600' },
                { icon: <FaTwitter />, color: 'hover:bg-blue-400' },
                { icon: <FaLinkedinIn />, color: 'hover:bg-blue-500' },
                { icon: <FaGithub />, color: 'hover:bg-gray-600' },
                { icon: <FaInstagram />, color: 'hover:bg-pink-600' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navItems.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Pages */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Legal</h3>
            <ul className="space-y-4">
              {legalPages.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@aifier.ai"
                  className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <span>info@aifier.ai</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <FiPhone className="w-4 h-4" />
                  </div>
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors mt-1">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <span>
                  123 AI Street,<br />
                  Tech Valley, CA 94025
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-2 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} AIFIER. All rights reserved.
            </p>
            <span className="text-gray-600">|</span>
            <p className="text-gray-500">
              Website by <a 
                href="https://digitaldreams.rf.gd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
              >
                Digital Dreams
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 