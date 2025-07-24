import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import soundEffects from '../utils/soundEffects';

const HeroSection: React.FC = () => {
  const handleButtonClick = () => {
    soundEffects.playClick();
  };

  const handleButtonHover = () => {
    soundEffects.playHover();
  };

  return (
    <section className="py-16 lg:py-24 items-center">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Label */}
          <motion.div 
            className="hero-label inline-block bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-400 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Pay Smart. Pay Fast
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="hero-title text-4xl sm:text-5xl lg:text-[55px] heading-title font-medium leading-tight text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            End-to-End Payout & Payroll Solutions for Digital Era.
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="hero-description text-lg text-[#B5B0B7] leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Optimize transactions and payouts with our secure, efficient payment gateway solution, ensuring smooth operations.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="hero-buttons flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <motion.button 
              className="btn btn-secondary rounded-full"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleButtonClick}
              onMouseEnter={handleButtonHover}
            >
              Reach out <ChevronRight size={16} />
            </motion.button>
            <motion.button 
              className="btn btn-primary rounded-full bg-gradient-to-b from-transparent via-[#402788] to-[#402788] shadow-[inset_0px_10px_30px_0px_rgba(73,123,255,0.7)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleButtonClick}
              onMouseEnter={handleButtonHover}
            >
              Get Started <ChevronRight size={16} />
            </motion.button>
          </motion.div>
        </div>

        {/* Right Content - Robot Illustration */}
        <motion.div 
          className="hero-robot relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.68, -0.55, 0.265, 1.55], delay: 0.4 }}
        >
          <div className="relative">
            {/* Robot Head */}
            <motion.img 
              src="/images/roboto.png" 
              alt="Robot Eye" 
              className=""
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Robot Core */}
            <motion.div 
              className="robot-core"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Floating Labels */}
            <motion.div 
              className="floating-label payout-process"
              style={{ top: '30%', left: '-20px' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55], delay: 1 }}
            >
              Payout process
            </motion.div>
            <motion.div 
              className="floating-label sales-screening"
              style={{ top: '10%', right: '-30px' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55], delay: 1.2 }}
            >
              Sales Product Screening
            </motion.div>
            <motion.div 
              className="floating-label transactions"
              style={{ bottom: '20%', right: '-20px' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55], delay: 1.4 }}
            >
              Transactions
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 