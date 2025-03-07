"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate which section is in view
      const sections = ['about', 'education', 'experience', 'projects', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(var(--background-start-rgb),0.8)] backdrop-blur-lg shadow-lg shadow-[rgba(var(--accent-color),0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="relative text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('about')}
            style={{ cursor: 'pointer' }}
          >
            <span className="bg-gradient-to-r from-[rgba(var(--accent-color),1)] to-[rgba(var(--accent-color-3),1)] text-transparent bg-clip-text">
              Ankur Kumar
            </span>
            <span className="absolute -inset-x-2 top-0 bottom-0 bg-[rgba(var(--accent-color),0.1)] rounded-lg -z-10 filter blur-sm"></span>
          </motion.div>
          
          <div className="hidden sm:block">
            <div className="flex space-x-8">
              {[
                { id: 'about', label: 'About' },
                { id: 'education', label: 'Education' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link relative ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[rgba(var(--accent-color),1)] to-[rgba(var(--accent-color-2),1)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button 
              className="w-8 h-8 flex items-center justify-center rounded-md border border-[rgba(var(--accent-color),0.3)] text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 