import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PremiumLoader = ({ isLoading, onComplete }) => {
  const [phase, setPhase] = useState('ignition'); // ignition, acceleration, stabilization
  const [progress, setProgress] = useState(0);
  const [rpm, setRpm] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    // Ignition phase (0-1.5 seconds)
    const ignitionTimer = setTimeout(() => {
      setPhase('acceleration');
    }, 1500);

    // Acceleration phase (1.5-3 seconds)
    const accelerationTimer = setTimeout(() => {
      setPhase('stabilization');
    }, 3000);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // RPM animation
    const rpmInterval = setInterval(() => {
      setRpm(prev => {
        if (phase === 'ignition') return Math.min(prev + 2, 30);
        if (phase === 'acceleration') return Math.min(prev + 5, 80);
        return 80 + Math.sin(Date.now() / 500) * 5;
      });
    }, 50);

    return () => {
      clearTimeout(ignitionTimer);
      clearTimeout(accelerationTimer);
      clearInterval(progressInterval);
      clearInterval(rpmInterval);
    };
  }, [isLoading, phase]);

  if (!isLoading) return null;

  // Calculate stroke dashoffset for the progress ring
  const circumference = 2 * Math.PI * 120; // radius = 120
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#0A0F1C] via-[#0B1424] to-[#0C1A2F] overflow-hidden">
      {/* Ambient grid effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px),
                            linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#0A0F1C]/90" />

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Rotating rim loader */}
        <div className="relative w-80 h-80 mb-8">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-[#841326]/20 blur-3xl animate-pulse" />
          
          {/* Progress ring - tachometer style */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 300 300">
            {/* Background ring */}
            <circle
              cx="150"
              cy="150"
              r="120"
              fill="none"
              stroke="#1E293B"
              strokeWidth="4"
              strokeLinecap="round"
              className="opacity-30"
            />
            
            {/* Active progress ring */}
            <circle
              cx="150"
              cy="150"
              r="120"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                filter: 'drop-shadow(0 0 10px #841326)',
                transition: phase === 'ignition' ? 'stroke-dashoffset 0.1s linear' : 'stroke-dashoffset 0.03s linear'
              }}
            />
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#841326" />
                <stop offset="50%" stopColor="#B31E3A" />
                <stop offset="100%" stopColor="#FF4D6D" />
              </linearGradient>
            </defs>
          </svg>

          {/* Rotating rim */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: phase === 'ignition' ? 360 : 360 * 3,
              scale: phase === 'ignition' ? [1, 1.02, 1] : 1,
            }}
            transition={{
              rotate: {
                duration: phase === 'ignition' ? 2 : 1,
                repeat: Infinity,
                ease: phase === 'ignition' ? "easeInOut" : "linear"
              },
              scale: {
                duration: 0.2,
                repeat: phase === 'ignition' ? 3 : 0,
              }
            }}
          >
            {/* Wheel rim design */}
            <div className="relative w-56 h-56">
              {/* Outer rim */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400 via-gray-300 to-gray-500 shadow-2xl" />
              
              {/* Metallic rim edge */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400" />
              
              {/* Inner rim */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 flex items-center justify-center">
                {/* Spokes */}
                <div className="absolute inset-0">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-500 origin-top"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${i * 72}deg) translateY(-28px)`,
                        filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.5))'
                      }}
                    />
                  ))}
                </div>
                
                {/* Center cap with U logo */}
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center border-2 border-gray-400">
                  <span className="text-3xl font-bold text-white/90 drop-shadow-lg">U</span>
                  
                  {/* Center bolt pattern */}
                  <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-gray-400"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-12px)`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Valve stem */}
              <div 
                className="absolute w-3 h-6 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(0deg) translateY(-60px)',
                }}
              />
            </div>
          </motion.div>

          {/* RPM indicator lights */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-1 h-4 rounded-full ${
                  i < rpm / 12.5 ? 'bg-[#841326]' : 'bg-gray-700'
                }`}
                animate={{
                  opacity: i < rpm / 12.5 ? [0.8, 1, 0.8] : 0.3,
                  scale: i < rpm / 12.5 ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Brand text */}
        <motion.h1
          className="text-5xl font-bold mb-2 font-display tracking-wider"
          animate={{
            textShadow: phase === 'ignition' 
              ? ['0 0 20px #841326', '0 0 40px #841326', '0 0 20px #841326']
              : '0 0 30px rgba(132, 19, 38, 0.5)',
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #DBE6F8 50%, #FFFFFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          U-WHEELS
        </motion.h1>

        {/* Status message */}
        <motion.div
          className="text-center"
          animate={{
            opacity: phase === 'ignition' ? [0.5, 1, 0.5] : 1,
          }}
          transition={{
            duration: 1,
            repeat: phase === 'ignition' ? Infinity : 0,
          }}
        >
          <p className="text-gray-400 text-lg mb-1 font-mono tracking-wider">
            {phase === 'ignition' && '⚡ IGNITION SEQUENCE INITIATED'}
            {phase === 'acceleration' && '⚙️ CALIBRATING DRIVETRAIN...'}
            {phase === 'stabilization' && '✅ SYSTEM READY'}
          </p>
          
          {/* Progress percentage */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#841326] to-[#FF4D6D]"
                style={{ width: `${progress}%` }}
                animate={{
                  boxShadow: ['0 0 5px #841326', '0 0 15px #841326', '0 0 5px #841326'],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              />
            </div>
            <span className="text-sm font-mono text-gray-400">{progress}%</span>
          </div>
        </motion.div>

        {/* Digital RPM display */}
        <motion.div
          className="absolute top-10 right-10 text-right"
          animate={{
            opacity: phase === 'ignition' ? 0.5 : 1,
          }}
        >
          <div className="text-xs text-gray-600 font-mono">RPM</div>
          <div className="text-2xl font-mono text-[#841326] font-bold">
            {Math.round(rpm * 100)}/min
          </div>
        </motion.div>

        {/* Battery voltage display */}
        <motion.div
          className="absolute top-10 left-10"
          animate={{
            opacity: phase === 'ignition' ? 0.5 : 1,
          }}
        >
          <div className="text-xs text-gray-600 font-mono">VOLTAGE</div>
          <div className="text-2xl font-mono text-[#841326] font-bold">
            {phase === 'ignition' ? '10.5V' : phase === 'acceleration' ? '12.8V' : '14.2V'}
          </div>
        </motion.div>

        {/* Ambient lighting effect */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#841326] to-transparent blur-sm" />
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#841326] to-transparent opacity-50" />
    </div>
  );
};

export default PremiumLoader;