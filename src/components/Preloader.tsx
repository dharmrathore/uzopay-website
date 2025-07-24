import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Animate out the preloader
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          setTimeout(onComplete, 500);
        }
      });

      tl.to('.preloader-content', {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power2.inOut"
      })
      .to('.preloader-overlay', {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, "-=0.4");
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: 'linear-gradient(135deg, #0d0c1d 0%, #1c0b2b 100%)'
          }}
        >
          <div className="flex items-center justify-center h-full">
            <motion.div
              className="preloader-content text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Logo */}
              <motion.div
                className="mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.68, -0.55, 0.265, 1.55],
                  delay: 0.2 
                }}
              >
                <h1 className="text-4xl font-bold text-white mb-2">UzOPay</h1>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
              </motion.div>

              {/* Loading animation */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex justify-center space-x-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-primary-500 rounded-full"
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Progress bar */}
              <motion.div
                className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mx-auto mb-4"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>

              {/* Progress text */}
              <motion.p
                className="text-white/70 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Loading... {Math.round(progress)}%
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader; 