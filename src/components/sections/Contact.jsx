import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import StoreMap from '../ui/StoreMap';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Navigation,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState('idle'); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setFormStatus('error');
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['08076652162'],
      action: 'tel:08076652162',
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['ulokajiemmanuel@gmail.com'],
      action: 'mailto:ulokajiemmanuel@gmail.com',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Mon - Fri: 8:00am - 9:00pm',
        'Sat - Sun: 10:00am - 6:00pm'
      ],
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: [
        '21b, Hunponu Wusu Street',
        'Lekki Phase 1, Lagos'
      ],
      action: 'https://maps.google.com/?q=21b+Hunponu+Wusu+Street+Lekki+Phase+1+Lagos',
      bgColor: 'bg-amber-500/10',
      textColor: 'text-amber-500'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp', color: 'hover:text-green-500' },
      { 
    icon: MessageCircle, 
    href: 'https://wa.me/2348076652162?text=Hello%20U-Wheels%2C%20I%20saw%20your%20website%20and%20I\'m%20interested%20in...', 
    label: 'WhatsApp', 
    color: 'hover:text-green-500' 
  }
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-secondary)] rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent-primary)] font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Contact <span className="gradient-text">U-Wheels</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Have questions? Ready for a test drive? Reach out to us — we're here to help you find your perfect vehicle.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={info.title}
                href={info.action}
                target={info.title === 'Location' ? '_blank' : undefined}
                rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300 block"
              >
                <div className={`w-14 h-14 rounded-xl ${info.bgColor} flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${info.textColor}`} />
                </div>
                
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm text-[var(--text-secondary)]">
                    {detail}
                  </p>
                ))}
              </motion.a>
            );
          })}
        </div>

        {/* Main Contact Area */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                  placeholder="0807 665 2162"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors resize-none"
                  placeholder="I'm interested in the Mercedes C-Class..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className="w-full btn-primary relative overflow-hidden group"
              >
                {formStatus === 'idle' && (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
                
                {formStatus === 'submitting' && (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                )}
                
                {formStatus === 'success' && (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle size={18} />
                    Message Sent!
                  </span>
                )}

                {formStatus === 'error' && (
                  <span className="flex items-center justify-center gap-2 text-red-200">
                    <AlertCircle size={18} />
                    Failed. Try again.
                  </span>
                )}
              </button>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-sm text-center"
                >
                  Thank you! We'll get back to you within 24 hours.
                </motion.p>
              )}

              {formStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm text-center"
                >
                  Something went wrong. Please try again or call us directly.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Right Side - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
              <p className="text-[var(--text-secondary)] mb-6">
                Prefer instant communication? Reach us directly through these channels:
              </p>
              
              <div className="space-y-4">
                {/* Direct Phone */}
                <a 
                  href="tel:08076652162"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--accent-primary)]/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">Call Us Now</p>
                    <p className="font-semibold">0807 665 2162</p>
                  </div>
                </a>

                {/* Direct Email */}
                <a 
                  href="mailto:ulokajiemmanuel@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--accent-primary)]/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">Email Us</p>
                    <p className="font-semibold">ulokajiemmanuel@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp (placeholder) */}
             <a 
  href="https://wa.me/2348076652162?text=Hello%20U-Wheels%2C%20I%20saw%20your%20website%20and%20I'm%20interested%20in..."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--accent-primary)]/10 transition-colors group"
>
  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
    <MessageCircle className="w-5 h-5 text-green-500" />
  </div>
  <div>
    <p className="text-sm text-[var(--text-secondary)]">WhatsApp</p>
    <p className="font-semibold">Chat with us instantly</p>
  </div>
</a>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="glass-effect rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[var(--accent-primary)]" />
                <h3 className="text-2xl font-bold">Business Hours</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-xl bg-[var(--bg-primary)]">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-[var(--accent-primary)] font-semibold">8:00am - 9:00pm</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-[var(--bg-primary)]">
                  <span className="font-medium">Saturday & Sunday</span>
                  <span className="text-[var(--accent-primary)] font-semibold">10:00am - 6:00pm</span>
                </div>
              </div>
              
              <p className="text-sm text-[var(--text-secondary)] mt-4">
                *Test drives available during business hours. Appointments recommended.
              </p>
            </div>

            {/* Social Links
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -3 }}
                      className={`w-12 h-12 rounded-full bg-[var(--bg-primary)] flex items-center justify-center ${social.color} transition-all`}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Sell Your Car Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-primary)] rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 gradient-text">Sell Your Car</h3>
                <p className="text-[var(--text-secondary)]">
                  Looking to sell your vehicle? We offer fair prices and a hassle-free process. 
                  Contact us for a free evaluation.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-4">
                  {/* Call Dad Button */}
                  <a 
                    href="tel:08076652162"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary)]/80 transition-all hover:scale-105"
                  >
                    <Phone size={18} />
                    <span>Call Me Now</span>
                  </a>
                  
                  {/* WhatsApp Button */}
                                    <a 
                    href="https://wa.me/2348076652162?text=Hello%20U-Wheels%2C%20I%20want%20to%20sell%20my%20car.%20Please%20provide%20more%20information."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-all hover:scale-105"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <p className="text-sm text-[var(--text-secondary)] mt-4">
                   Quick evaluation • Best prices • Instant payment
                </p>
              </div>
              
              {/* Sell Car Icon */}
              <div className="w-32 h-32 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--accent-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L5 13M17 17L19 13M4 9H20M6 21H18C19.1046 21 20 20.1046 20 19V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V19C4 20.1046 4.89543 21 6 21Z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map/Directions Card */}
     <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="mt-8"
>
  <StoreMap /> 
</motion.div>
      </div>
    </section>
  );
};

export default Contact;