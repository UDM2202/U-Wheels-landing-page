import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';

const StoreMap = () => {  // Changed from 'Map' to 'StoreMap'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-effect rounded-2xl overflow-hidden relative"
      style={{ height: '400px' }}
    >
      {/* Simple gradient background */}
      <div className="w-full h-full bg-gradient-to-br from-[#841326]/20 to-[#8591A4]/20 flex items-center justify-center">
        <div className="text-center p-8">
          <Navigation className="w-16 h-16 mx-auto mb-4 text-[#841326] opacity-50" />
          <h3 className="text-2xl font-bold mb-2">U-Wheels Showroom</h3>
          <p className="text-[var(--text-secondary)] mb-1">21b, Hunponu Wusu Street</p>
          <p className="text-[var(--text-secondary)]">Lekki Phase 1, Lagos</p>
        </div>
      </div>
      
      {/* Location info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end bg-gradient-to-t from-black/70 to-transparent">
        <div className="text-white">
          <p className="font-bold text-lg">U-Wheels Showroom</p>
          <p className="text-sm opacity-90">21b Hunponu Wusu Street, Lekki Phase 1</p>
        </div>
        
        <a
          href="https://maps.google.com/?q=21b+Hunponu+Wusu+Street+Lekki+Phase+1+Lagos"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#841326] text-white p-3 rounded-full hover:bg-[#a01e32] transition-colors shadow-lg"
        >
          <Navigation size={20} />
        </a>
      </div>
    </motion.div>
  );
};

export default StoreMap;