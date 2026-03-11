import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  ChevronUp,
  Heart
} from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Cars', href: '#cars' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    { icon: Phone, text: '0807 665 2162', href: 'tel:08076652162' },
    { icon: Mail, text: 'ulokajiemmanuel@gmail.com', href: 'mailto:ulokajiemmanuel@gmail.com' },
    { icon: MapPin, text: '21b Hunponu Wusu St, Lekki Phase 1', href: 'https://maps.google.com/?q=21b+Hunponu+Wusu+Street+Lekki+Phase+1+Lagos' },
    { icon: Clock, text: 'Mon-Fri: 8am-9pm, Sat-Sun: 10am-6pm', href: null }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp', color: 'hover:text-green-500' }
  ];

  const services = [
    'Car Sales',
    'Test Drives',
    'Trade-In',
    'Financing Help',
    'Vehicle Inspection',
    'Warranty'
  ];

  return (
    <footer className="relative bg-[var(--footer-bg)] border-t border-[var(--border-color)] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-secondary)] rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo 
              size="md"
              logoSrc="/images/u-wheelsLogo.png"
              alt="U-Wheels"
              showText={true}
              className="mb-4"
            />
            <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed">
              Your premium destination for quality used cars. Every vehicle comes with a guarantee of excellence and customer satisfaction.
            </p>
            
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm">
              <Heart size={16} className="text-[var(--accent-primary)]" />
              <span className="text-[var(--text-secondary)]">Trusted by 150+ happy customers</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--accent-primary)]" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 gradient-text">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[var(--text-secondary)] text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[var(--accent-secondary)]" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 gradient-text">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon size={16} className="flex-shrink-0 text-[var(--accent-primary)]" />
                    <span className="text-sm text-[var(--text-secondary)]">{item.text}</span>
                  </>
                );

                return item.href ? (
                  <li key={index}>
                    <a 
                      href={item.href}
                      target={item.icon === MapPin ? '_blank' : undefined}
                      rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 hover:text-[var(--accent-primary)] transition-colors"
                    >
                      {content}
                    </a>
                  </li>
                ) : (
                  <li key={index} className="flex items-center gap-3">
                    {content}
                  </li>
                );
              })}
            </ul>

            {/* Social Links */}
            {/* <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-[var(--text-secondary)]">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-[var(--bg-primary)] flex items-center justify-center ${social.color} transition-all hover:scale-110`}
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-sm text-[var(--text-secondary)] text-center md:text-left">
            © {new Date().getFullYear()} U-Wheels. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-primary)] hover:bg-[var(--accent-primary)] transition-all duration-300"
            aria-label="Back to top"
          >
            <span className="text-sm font-medium group-hover:text-white transition-colors">
              Back to Top
            </span>
            <ChevronUp 
              size={16} 
              className="group-hover:text-white transition-colors group-hover:animate-bounce" 
            />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;