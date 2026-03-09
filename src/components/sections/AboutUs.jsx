import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  ThumbsUp, 
  Clock, 
  Users, 
  Star,
  CheckCircle,
  Wrench,
  Car,
  Heart,
  Sparkles
} from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { value: '4+', label: 'Years Experience', icon: Clock },
    { value: '150+', label: 'Happy Customers', icon: Users },
    { value: '100+', label: 'Cars Sold', icon: Car },
    { value: '100%', label: 'Satisfaction', icon: Star }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Certified Vehicles',
      description: 'Every car undergoes a rigorous 150-point inspection before joining our inventory.'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'All vehicles come with our personal guarantee of quality and reliability.'
    },
    {
      icon: ThumbsUp,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprises. What you see is what you pay.'
    },
    {
      icon: Heart,
      title: 'Passion for Cars',
      description: 'We hand-select only the finest vehicles for our discerning customers.'
    }
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We believe in honest dealings and transparent communication.'
    },
    {
      title: 'Excellence',
      description: 'Every vehicle meets our highest standards before reaching you.'
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction drives everything we do.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-secondary)] rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent-primary)] font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Your Trusted <span className="gradient-text">Automotive Partner</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Since 2021, U-Wheels has been providing quality pre-owned vehicles with integrity, transparency, and exceptional service.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="glass-effect rounded-2xl p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="relative">
                    {/* Icon with glow */}
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center group-hover:bg-[var(--accent-primary)]/20 transition-all">
                      <Icon className="w-8 h-8 text-[var(--accent-primary)]" />
                    </div>
                    
                    {/* Value */}
                    <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                      {stat.value}
                    </h3>
                    
                    {/* Label */}
                    <p className="text-sm text-[var(--text-secondary)]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Story with Owner's Picture */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Owner's Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">

              <img 
                src="/images/ulokaji-emmanuel.jpg" 
                alt="Ulokaji Emmanuel - Founder of U-Wheels"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                 style={{
        objectPosition: 'center 10%' 
      }}
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Name badge */}
              <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="absolute bottom-0 left-0 right-0 p-6"
>
  <div className="backdrop-blur-md bg-black/70 dark:bg-black/50 rounded-2xl p-4 border border-white/20 shadow-xl">
    <h3 className="text-2xl font-bold text-white">Ulokaji Emmanuel</h3>
    <p className="text-white/90">Founder & Owner</p>
  </div>
</motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[var(--accent-primary)]/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[var(--accent-secondary)]/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Right side - Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">
              A Vision Realized in <span className="gradient-text">2021</span>
            </h3>
            
            <p className="text-[var(--text-secondary)] leading-relaxed">
              U-Wheels was born from Ulokaji Emmanuel's simple yet powerful vision: buying a used car should be exciting, not stressful. Starting in 2021, what began as a passion for quality automobiles quickly grew into a trusted name in pre-owned vehicles.
            </p>
            
            <p className="text-[var(--text-secondary)] leading-relaxed">
              The secret to U-Wheels' success? Treating every customer like family. Emmanuel personally selects each vehicle, ensuring it meets strict quality standards. No hidden fees, no pressure tactics, just honest cars from an honest dealer.
            </p>

            {/* Values list */}
            <div className="space-y-4 pt-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">{value.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Signature */}
            <div className="pt-6">
              <p className="font-display text-2xl gradient-text">Ulokaji Emmanuel</p>
              <p className="text-sm text-[var(--text-secondary)]">Founder & Owner, U-Wheels</p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--accent-primary)]/20 transition-all">
                  <Icon className="w-7 h-7 text-[var(--accent-primary)]" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass-effect rounded-3xl p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--accent-primary)] rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--accent-secondary)] rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Find Your <span className="gradient-text">Perfect Car?</span>
              </h3>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
                Visit us today or browse our inventory online. Ulokaji and the U-Wheels team are here to help you every step of the way.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#cars" className="btn-primary">
                  Browse Inventory
                </a>
                <a href="#contact" className="btn-outline">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;