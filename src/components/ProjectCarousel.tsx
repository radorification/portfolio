"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  imageUrl: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    gradient: "from-blue-500 to-purple-600",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    projectUrl: "https://example.com/ecommerce"
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "Content generator using OpenAI's GPT models and React for the frontend.",
    technologies: ["React", "TypeScript", "OpenAI API", "TailwindCSS"],
    gradient: "from-cyan-400 to-pink-500",
    imageUrl: "https://images.unsplash.com/photo-1677442135153-3760f7b054df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    projectUrl: "https://example.com/ai-generator"
  },
  {
    id: 3,
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency dashboard with charts and data visualization.",
    technologies: ["Next.js", "D3.js", "WebSockets", "Framer Motion"],
    gradient: "from-emerald-400 to-blue-500",
    imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1585&q=80",
    projectUrl: "https://example.com/crypto-dashboard"
  },
  {
    id: 4,
    title: "Social Network App",
    description: "Mobile-first social networking app with real-time messaging.",
    technologies: ["React Native", "Firebase", "Redux", "Socket.io"],
    gradient: "from-purple-500 to-pink-600",
    imageUrl: "https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    projectUrl: "https://example.com/social-network"
  },
  {
    id: 5,
    title: "Portfolio Site",
    description: "Interactive developer portfolio featuring modern design and animations.",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
    gradient: "from-blue-400 to-indigo-600",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1455&q=80",
    projectUrl: "https://example.com/portfolio"
  }
];

export default function ProjectCarousel() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate the next index with wrap-around
  const nextIndex = (current: number, dir: number) => {
    return (current + dir + projects.length) % projects.length;
  };

  // Navigate to previous project
  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex([nextIndex(activeIndex, -1), -1]);
  };

  // Navigate to next project
  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex([nextIndex(activeIndex, 1), 1]);
  };

  // Handle project card click
  const handleProjectClick = () => {
    window.open(projects[activeIndex].projectUrl, '_blank', 'noopener,noreferrer');
  };

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 300,
        damping: 30,
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4,
      }
    })
  };

  // Indicators for the current project
  const Indicators = () => (
    <div className="flex justify-center mt-8 space-x-2">
      {projects.map((_, index) => (
        <button
          key={index}
          onClick={() => {
            if (isAnimating) return;
            const dir = index > activeIndex ? 1 : -1;
            setIsAnimating(true);
            setActiveIndex([index, dir]);
          }}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            index === activeIndex 
              ? 'w-6 bg-gradient-to-r from-[rgba(var(--accent-color),1)] to-[rgba(var(--accent-color-2),1)]'
              : 'w-1.5 bg-gray-600 hover:bg-gray-500'
          }`}
          aria-label={`Go to project ${index + 1}`}
        />
      ))}
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title">Featured Projects</h2>
        <div className="flex space-x-4">
          <button 
            onClick={prev}
            disabled={isAnimating}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-transparent bg-[rgba(var(--card-bg),0.7)] hover:border-[rgba(var(--accent-color),0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={next}
            disabled={isAnimating}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-transparent bg-[rgba(var(--card-bg),0.7)] hover:border-[rgba(var(--accent-color-2),0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden bg-[rgba(var(--card-bg),0.2)] rounded-xl border border-[rgba(var(--accent-color),0.1)] p-2 md:p-4">
        <div className="relative h-[450px] md:h-[500px] flex items-center justify-center">
          {/* Background effect */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div 
              className="absolute inset-0 filter blur-3xl opacity-20" 
              style={{ 
                backgroundImage: `url(${projects[activeIndex].imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          </div>
          
          <AnimatePresence 
            initial={false} 
            custom={direction}
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full max-w-2xl px-4"
            >
              <div 
                className="card group cursor-pointer h-full flex flex-col relative overflow-hidden hover:shadow-[0_0_30px_rgba(var(--accent-color),0.2)]"
                onClick={handleProjectClick}
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4 relative">
                  <img 
                    src={projects[activeIndex].imageUrl} 
                    alt={projects[activeIndex].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Visit site button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 bg-[rgba(var(--accent-color),0.9)] text-white rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      Visit Project
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">{projects[activeIndex].title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{projects[activeIndex].description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {projects[activeIndex].technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-sm px-3 py-1 rounded-full bg-[rgba(var(--accent-color),0.1)] border border-[rgba(var(--accent-color),0.2)] text-[rgba(var(--accent-color),1)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <Indicators />
      </div>
    </div>
  );
} 