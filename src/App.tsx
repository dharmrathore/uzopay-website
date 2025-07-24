import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MidSection from './components/MidSection';
import QuickStartCard from './components/QuickStartCard';
import DemoSection from './components/DemoSection';
import ReasonsSection from './components/ReasonsSection';
import ExpertiseSection from './components/ExpertiseSection';
import IndustriesSection from './components/IndustriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import SoundToggle from './components/SoundToggle';
import ScrollProgress from './components/ScrollProgress';
import CursorEffect from './components/CursorEffect';
import { initAnimations, cleanupAnimations } from './utils/animations';
import soundEffects from './utils/soundEffects';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize sound effects
    soundEffects.getSoundEnabled();
    
    // Add scroll sound effect
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        soundEffects.playScroll();
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Initialize animations after preloader
      setTimeout(() => {
        initAnimations();
        setIsVisible(true);
        soundEffects.playPageTransition();
      }, 500);
    }

    return () => {
      cleanupAnimations();
    };
  }, [isLoading]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <motion.div
        className="min-h-screen relative bg-dark-950 text-white font-inter"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Scroll Progress Indicator */}
        <ScrollProgress />
        
        {/* Custom Cursor Effect */}
        <CursorEffect />
        
        {/* Background pattern */}
        <motion.div 
          className="fixed inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-600/5 to-transparent"></div>
        </motion.div>
        
        <Header />
        
        {/* Original UzOPay Design */}
        <main className="pt-20 max-w-full w-full mx-auto px-8 lg:px-12">
          <HeroSection />
          <div className="grid lg:grid-cols-2 gap-16 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MidSection />
            <QuickStartCard />
          </div>
        </main>

        {/* New Demo Section */}
        <DemoSection />

        {/* Reasons to Partner Section */}
        <ReasonsSection />

        {/* Our Expertise Section */}
        <ExpertiseSection />

        {/* Powering Payments Across Industries Section */}
        <IndustriesSection />

        {/* Client Feedbacks Section */}
        <TestimonialsSection />

        {/* Footer */}
        <Footer />
        
        {/* Sound Toggle */}
        <SoundToggle />
      </motion.div>
    </>
  );
}

export default App;
