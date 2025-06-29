import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/mrushikz',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mrushikz',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Portfolio',
      url: '#',
      icon: <Globe className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="py-6 border-t border-electric-lime/20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-phthalo-base/20 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-mono text-white-soft/80">
              © {new Date().getFullYear()} Mrushik Zalawadiya. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-phthalo-base/30 border border-electric-lime/30 text-electric-lime hover:border-electric-lime transition-colors duration-300 backdrop-blur-sm"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
            
            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-electric-lime text-near-black-green shadow-lg shadow-electric-lime/20 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;