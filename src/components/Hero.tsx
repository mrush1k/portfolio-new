import React, { useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 8;
      const y = (clientY / window.innerHeight - 0.5) * 8;
      
      bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle ambient background elements */}
      <div 
        ref={bgRef} 
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-luxury-white/2 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-phthalo-light/5 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-phthalo-accent/3 blur-2xl" />
      </div>
      
      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="font-mono text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <span className="text-soft-white">Hi, I'm </span>
            <span className="text-luxury-white" style={{ textShadow: '0 4px 20px rgba(245, 240, 236, 0.3)' }}>
              Mrushik Zalawadiya
            </span>
          </motion.h1>
          
          <motion.h2 
            className="font-mono text-xl sm:text-2xl md:text-4xl mb-10 flex items-center justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="mr-3 text-muted-white">I'm a</span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2500,
                'Frontend Engineer',
                2500,
                'Backend Developer',
                2500,
                'React Specialist',
                2500,
                'Node.js Developer',
                2500,
                'UI/UX Designer',
                2500,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-luxury-white font-bold"
              style={{ textShadow: '0 2px 12px rgba(245, 240, 236, 0.4)' }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-muted-white max-w-3xl mx-auto text-lg md:text-xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Building elegant, performant, and accessible web applications with modern technologies. 
            Specializing in creating immersive digital experiences for creative professionals in AI, tech, and digital design.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <a 
              href="#projects" 
              className="btn text-lg px-8 py-4"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="btn-outline text-lg px-8 py-4"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.5,
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down" className="block">
          <ChevronDown 
            size={32} 
            className="text-luxury-white/70 animate-bounce" 
            style={{ filter: 'drop-shadow(0 2px 8px rgba(245, 240, 236, 0.3))' }}
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;