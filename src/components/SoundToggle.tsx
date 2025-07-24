import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import soundEffects from '../utils/soundEffects';

const SoundToggle: React.FC = () => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  useEffect(() => {
    setIsSoundEnabled(soundEffects.getSoundEnabled());
  }, []);

  const handleToggle = () => {
    const newState = !isSoundEnabled;
    setIsSoundEnabled(newState);
    soundEffects.setSoundEnabled(newState);
    
    // Play a sound to indicate the change
    if (newState) {
      soundEffects.playSuccess();
    }
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 p-3 bg-dark-900/80 backdrop-blur-md border border-primary-500/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      onClick={handleToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <motion.div
        animate={{ rotate: isSoundEnabled ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isSoundEnabled ? (
          <Volume2 size={20} className="text-primary-500" />
        ) : (
          <VolumeX size={20} className="text-gray-400" />
        )}
      </motion.div>
      
      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-3 px-2 py-1 bg-dark-900 text-white text-xs rounded whitespace-nowrap opacity-0 pointer-events-none"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isSoundEnabled ? 'Sound On' : 'Sound Off'}
      </motion.div>
    </motion.button>
  );
};

export default SoundToggle; 