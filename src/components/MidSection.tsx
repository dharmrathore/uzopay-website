import React from 'react';
import { motion } from 'framer-motion';

const MidSection: React.FC = () => {
  return (
    <section className="flex items-center animate-fade-in-up">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 flex-1">
          {/* Label */}
          <motion.div 
            className="inline-block bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Reliable, and Efficient
          </motion.div>

          {/* Headline */}
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Simplify the payments process
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg text-gray-400 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Tools crafted to simplify and enhance your payout processes.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default MidSection; 