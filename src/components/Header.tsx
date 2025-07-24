import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import soundEffects from '../utils/soundEffects';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    soundEffects.playClick();
  };

  const handleNavClick = () => {
    soundEffects.playClick();
  };

  const handleNavHover = () => {
    soundEffects.playHover();
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 pt-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className={`flex justify-between items-center h-auto p-4 px-5 backdrop-blur-[80px] border border-[#44C7FC] rounded-[60px] transition-all duration-300 ${
            scrolled 
              ? 'shadow-[0px_8px_32px_rgba(0,0,0,0.3)] bg-dark-900/80' 
              : 'shadow-[0px_4px_6px_-1px_#12121714] bg-dark-900/40'
          }`}
          animate={{
            scale: scrolled ? 0.98 : 1,
            y: scrolled ? -5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo */}
          <motion.div 
            className="font-bold text-xl text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNavClick}
          >
            UzOPay
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { href: "/", label: "Home", active: true },
              { href: "/ai-banking", label: "Ai Banking", dropdown: true },
              { href: "/payments", label: "Payments" },
              { href: "/payouts", label: "Payouts" },
              { href: "/payroll", label: "Payroll" },
              { href: "/contact", label: "Contact Us" }
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`nav-link ${item.active ? 'active' : ''} ${item.dropdown ? 'dropdown' : ''}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={handleNavClick}
                onMouseEnter={handleNavHover}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={16} />}
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2 text-white hover:text-primary-500 transition-colors"
            onClick={handleMenuToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="lg:hidden bg-dark-900/95 backdrop-blur-md border-t border-primary-500/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className="flex flex-col space-y-4 px-4 py-6">
                {[
                  { href: "/", label: "Home", active: true },
                  { href: "/ai-banking", label: "Ai Banking", dropdown: true },
                  { href: "/payments", label: "Payments" },
                  { href: "/payouts", label: "Payouts" },
                  { href: "/payroll", label: "Payroll" },
                  { href: "/contact", label: "Contact Us" }
                ].map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${item.active ? 'active' : ''} py-2 ${item.dropdown ? 'flex items-center justify-between' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    onClick={handleNavClick}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={16} />}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header; 