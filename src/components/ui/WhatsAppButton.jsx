import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = ({ 
  message = "Hello U-Wheels, I'm interested in...",
  position = "bottom-right",
  size = "md",
  showLabel = false
}) => {
  const phoneNumber = "2348076652162"; // Your formatted number
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const sizes = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-16 h-16"
  };

  const positions = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6"
  };

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${positions[position]} z-50 group`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
      
      {/* Main button */}
      <div className={`relative ${sizes[size]} rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-shadow`}>
        <MessageCircle size={size === 'lg' ? 28 : size === 'md' ? 24 : 20} />
        
        {/* Notification dot*/}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
      </div>

      {/* Tooltip/Label */}
      {showLabel && (
        <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap">
          <div className="bg-gray-900 text-white text-sm py-2 px-4 rounded-full shadow-lg">
            Chat on WhatsApp
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </div>
        </div>
      )}
    </motion.a>
  );
};

export default WhatsAppButton;