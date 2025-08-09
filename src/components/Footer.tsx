import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"
            >
              Manoj A
            </motion.div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              AI Engineering passionate about building intelligent applications,  
              enhancing software quality, and collaborating with teams to deliver impactful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Quick Navigation
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Ready to Collaborate?
            </h3>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Let's discuss your next project and create something amazing together.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl font-medium text-sm hover:shadow-md transition-shadow duration-200"
              >
                <span>Start a Conversation</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
            <span>Code. Coffee.</span>
            <Heart size={16} className="text-red-500 fill-current animate-pulse" />
            <span>Repeat. — © 2025 Manoj</span>
          </div>
          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl text-white hover:shadow-lg transition-shadow duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;