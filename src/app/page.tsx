"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaMobile } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa';
import Navigation from '@/components/Navigation';
import ProjectCarousel from '@/components/ProjectCarousel';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen px-4 py-16 sm:px-8 md:px-16 lg:px-24">
        {/* Hero Section */}
        <motion.section 
          id="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-[90vh] text-center relative"
        >
          {/* Cyberpunk elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-[rgba(var(--accent-color),0.03)] filter blur-xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-[rgba(var(--accent-color-2),0.03)] filter blur-xl"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-[rgba(var(--accent-color-3),0.03)] filter blur-xl"></div>
          </div>
          
          <motion.h1 
            className="text-2xl md:text-3xl font-medium mb-3 text-gray-300"
            {...fadeInUp}
          >
            Hi, I'm
          </motion.h1>
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6 relative"
            {...fadeInUp}
          >
            <span className="bg-gradient-to-r from-[rgb(var(--accent-color))] to-[rgb(var(--accent-color-3))] text-transparent bg-clip-text">
              Ankur Kumar
            </span>
            <span className="absolute -inset-x-6 top-0 bottom-0 bg-[rgba(var(--accent-color),0.07)] rounded-lg -z-10 blur-sm"></span>
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Full Stack Developer
          </motion.h3>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mb-8"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
          </motion.p>
          <motion.div 
            className="flex space-x-6"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <a href="https://github.com/radorification" className="text-3xl text-[rgba(var(--accent-color),0.8)] hover:text-[rgb(var(--accent-color))] transition-colors hover:shadow-glow">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ankur1211/" className="text-3xl text-[rgba(var(--accent-color-2),0.8)] hover:text-[rgb(var(--accent-color-2))] transition-colors">
              <FaLinkedin />
            </a>
            <a href="mailto:kumarankur131@gmail.com" className="text-3xl text-[rgba(var(--accent-color-3),0.8)] hover:text-[rgb(var(--accent-color-3))] transition-colors">
              <FaEnvelope />
            </a>
          </motion.div>
          
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5"></path>
              <path d="M7 7l5 5 5-5"></path>
            </svg>
          </motion.div>
        </motion.section>

        {/* Skills Section (New) */}
        <motion.section 
          className="py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div 
              className="card text-center"
              whileHover={{ scale: 1.03 }}
              {...fadeInUp}
            >
              <div className="w-16 h-16 bg-[rgba(var(--accent-color),0.1)] rounded-full mx-auto flex items-center justify-center mb-4 text-[rgb(var(--accent-color))]">
                <FaCode className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-gray-300">React, Next.js, TypeScript, HTML/CSS, JavaScript</p>
            </motion.div>
            
            <motion.div 
              className="card text-center"
              whileHover={{ scale: 1.03 }}
              {...fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-[rgba(var(--accent-color-2),0.1)] rounded-full mx-auto flex items-center justify-center mb-4 text-[rgb(var(--accent-color-2))]">
                <FaServer className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-gray-300">Node.js, Express.js, MongoDB, SQL, MySQL, API</p>
            </motion.div>
            
            <motion.div 
              className="card text-center"
              whileHover={{ scale: 1.03 }}
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-[rgba(var(--accent-color-3),0.1)] rounded-full mx-auto flex items-center justify-center mb-4 text-[rgb(var(--accent-color-3))]">
                <FaCloud className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">DevOps & Cloud</h3>
              <p className="text-gray-300">AWS/Azure/GCloud, Docker, Kubernetes, CI/CD, Redux</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          id="education"
          className="py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <div className="grid gap-6">
            <motion.div 
              className="card"
              whileHover={{ scale: 1.02 }}
              {...fadeInUp}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[rgba(var(--accent-color),0.1)] flex items-center justify-center text-[rgb(var(--accent-color))] border border-[rgba(var(--accent-color),0.2)]">
                  <span className="text-xl font-bold">BE</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bachelor of Engineering (ECE)</h3>
                  <p className="text-[rgba(var(--accent-color-2),0.9)]">BMS Institute of Technology • 2024</p>
                  {/*<p className="mt-4 text-gray-300">Focused on web technologies, algorithms, and software engineering principles.</p>*/}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Work History Section */}
        <motion.section 
          id="experience"
          className="py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <div className="grid gap-6">
            <motion.div 
              className="card"
              whileHover={{ scale: 1.02 }}
              {...fadeInUp}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[rgba(var(--accent-color-2),0.1)] flex items-center justify-center text-[rgb(var(--accent-color-2))] border border-[rgba(var(--accent-color-2),0.2)]">
                  <span className="text-xl font-bold">SD</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Full Stack Developer Intern</h3>
                  <p className="text-[rgba(var(--accent-color),0.9)]">Sigma Tenant • 10/2022-03/2023</p>
                  <p className="mt-4 text-gray-300">Developed company's main website using React.js, TailwindCSS, and TypeScript.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="card"
              whileHover={{ scale: 1.02 }}
              {...fadeInUp}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[rgba(var(--accent-color-2),0.1)] flex items-center justify-center text-[rgb(var(--accent-color-2))] border border-[rgba(var(--accent-color-2),0.2)]">
                  <span className="text-xl font-bold">SD</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Frontend Developer Intern</h3>
                  <p className="text-[rgba(var(--accent-color),0.9)]">Organic Inventions • 02/2022-07/2022</p>
                  <p className="mt-4 text-gray-300">Worked on multiple projects and collaborated with the team to deliver the best results.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          className="py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProjectCarousel />
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact"
          className="py-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Interested in working together? Feel free to reach out!
          </motion.p>
          <motion.a
            href="mailto:kumarankur131@gmail.com"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-[rgba(var(--accent-color),0.8)] to-[rgba(var(--accent-color-2),0.8)] text-white font-semibold hover:from-[rgb(var(--accent-color))] hover:to-[rgb(var(--accent-color-2))] transition-all duration-300 shadow-lg shadow-[rgba(var(--accent-color),0.3)]"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(var(--accent-color), 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
          </motion.a>
        </motion.section>
      </main>
    </>
  );
}
