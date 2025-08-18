import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, ExternalLink } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Personas', href: '#personas' },
    { name: 'Comandos', href: '#comandos' },
    { name: 'Instalação', href: '#instalacao' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-purple-400 font-mono text-xl font-bold">/CB</div>
            <div className="text-white font-semibold">CulturaBuilder</div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            <motion.a
              href="https://github.com/decomontenegro/CulturaBuilder-MCP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              <span>GitHub</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              
              <a
                href="https://github.com/decomontenegro/CulturaBuilder-MCP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 text-purple-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
              >
                <Github size={16} />
                <span>GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

