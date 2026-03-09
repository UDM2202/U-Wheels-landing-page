import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ 
  className = "", 
  size = "md", 
  showText = true,
  logoSrc = "/images/u-wheelsLogo.png",
  alt = "U-Wheels Logo"
}) => {
  const sizes = {
    sm: { container: "w-10 h-10", text: "text-xl" },
    md: { container: "w-14 h-14", text: "text-2xl" },
    lg: { container: "w-20 h-20", text: "text-4xl" }
  };

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Image Container */}
      <div className={`relative ${sizes[size].container}`}>
        <img 
          src={logoSrc}
          alt={alt}
          className="w-full h-full object-contain"
        />
        
        {/* Optional glowing effect - you can remove if you don't want it */}
        <motion.div 
          className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Text - you can keep or remove this */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className={`font-display font-bold ${sizes[size].text} bg-gradient-to-r from-[#841326] to-[#8591A4] bg-clip-text text-transparent`}>
            U-Wheels
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Logo;