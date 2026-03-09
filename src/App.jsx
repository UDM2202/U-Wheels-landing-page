import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; 
import { Toaster } from 'react-hot-toast';
import { useTheme } from './hooks/useTheme';
import ThemeToggle from './components/ui/ThemeToggle';
import Logo from './components/ui/Logo';
import PremiumLoader from './components/ui/PremiumLoader';
import FeaturedCars from './components/sections/FeaturedCars';
import AboutUs from './components/sections/AboutUs';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Premium Loading Screen*/}
      <AnimatePresence mode="wait">
        {isLoading && <PremiumLoader isLoading={isLoading} />}
      </AnimatePresence>

      {/* Main Content*/}
      {!isLoading && (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors">
          {/* Header */}
          <header className="glass-effect fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-color)]">
            <div className="container-custom flex items-center justify-between py-4">
              <Logo 
                size="lg"
                logoSrc="/images/u-wheelsLogo.png"
                alt="U-Wheels"
                showText={false}
              />
              
              <div className="flex items-center gap-4">
                <nav className="hidden md:flex items-center gap-8">
                  <a href="#home" className="nav-link">Home</a>
                  <a href="#cars" className="nav-link">Cars</a>
                  <a href="#about" className="nav-link">About</a>
                  <a href="#contact" className="nav-link">Contact</a>
                </nav>
                
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="pt-20">
            {/* Hero Section */}
            <section id="home" className="min-h-[80vh] flex items-center justify-center">
              <div className="container-custom text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Welcome to{' '}
                  <span className="gradient-text">U-Wheels</span>
                </h1>
                <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                  Your premium destination for quality used cars. 
                  Every vehicle comes with a guarantee of excellence.
                </p>
                <div className="flex gap-4 justify-center mt-8">
                  <a href="#cars" className="btn-primary">View Cars</a>
                  <a href="#contact" className="btn-outline">Contact Us</a>
                </div>
              </div>
            </section>

          
            <FeaturedCars />
            <AboutUs />
            <Contact />
            <Footer />
            <WhatsAppButton />
          </main>

          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'var(--card-bg)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)'
              }
            }}
          />
        </div>
      )}
    </>
  );
}

export default App;