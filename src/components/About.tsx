import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-phthalo-base/10 via-deep-teal/5 to-dusky-cyan/10 pointer-events-none" />
      
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="section-container relative z-10"
      >
        <h2 className="heading text-center">About Me</h2>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 mb-10">
            <p className="text-lg md:text-xl leading-relaxed text-white-soft/90">
              I'm a passionate Full Stack Developer with expertise in modern web technologies.
              With a strong foundation in both frontend and backend development,
              I specialize in creating responsive, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white-soft/90">
              My journey in software development began with a curiosity about how websites work,
              which evolved into a career building complex web applications for creative professionals
              in AI, tech, and digital design industries.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white-soft/90">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community. I believe in writing clean, maintainable code
              and creating exceptional user experiences.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a 
              href="#projects" 
              className="btn text-lg px-8 py-4 inline-flex items-center"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;