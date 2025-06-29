import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechStack: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    // Frontend Technologies
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Framer Motion', category: 'Frontend' },
    { name: 'Redux', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    
    // Backend Technologies
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Django', category: 'Backend' },
    { name: 'FastAPI', category: 'Backend' },
    { name: 'GraphQL', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'Socket.io', category: 'Backend' },
    
    // Database Technologies
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Redis', category: 'Database' },
    { name: 'Firebase', category: 'Database' },
    { name: 'Supabase', category: 'Database' },
    
    // DevOps & Tools
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'DevOps' },
    { name: 'Vercel', category: 'DevOps' },
    { name: 'Netlify', category: 'DevOps' },
    { name: 'Git', category: 'DevOps' },
    { name: 'GitHub', category: 'DevOps' },
    { name: 'CI/CD', category: 'DevOps' },
    { name: 'Webpack', category: 'DevOps' },
    { name: 'Vite', category: 'DevOps' },
  ];

  // Create multiple rows for continuous scrolling effect
  const createTechRow = (startIndex: number, direction: 'left' | 'right') => {
    const rowTechs = technologies.slice(startIndex, startIndex + 12);
    const duplicatedTechs = [...rowTechs, ...rowTechs, ...rowTechs]; // Triple for seamless loop
    
    return (
      <motion.div
        className="flex space-x-6 mb-6"
        animate={{
          x: direction === 'left' ? [0, -100 * rowTechs.length] : [-100 * rowTechs.length, 0],
        }}
        transition={{
          duration: 25 + Math.random() * 10, // Varying speeds
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="tech-card group flex-shrink-0"
            whileHover={{ 
              scale: 1.05,
              y: -4,
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative overflow-hidden">
              <div className="tech-glow absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 px-6 py-4">
                <span className="font-mono text-sm font-semibold text-luxury-white whitespace-nowrap">
                  {tech.name}
                </span>
                <div className="text-xs text-muted-white/60 mt-1 font-mono">
                  {tech.category}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section id="tech-stack" className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-teal/8 via-phthalo-base/12 to-dusky-cyan/6 pointer-events-none" />
      
      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading">Technology Stack</h2>
          <p className="text-muted-white text-lg max-w-3xl mx-auto leading-relaxed">
            Leveraging cutting-edge technologies to build scalable, performant, and innovative solutions
            for modern web applications and digital experiences.
          </p>
        </motion.div>

        {/* Continuous scrolling tech slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* Gradient overlays for seamless edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-phthalo-base via-phthalo-base/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-phthalo-base via-phthalo-base/80 to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            {/* First row - moving left */}
            {createTechRow(0, 'left')}
            
            {/* Second row - moving right */}
            {createTechRow(12, 'right')}
            
            {/* Third row - moving left */}
            {createTechRow(24, 'left')}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="#projects" 
            className="btn text-lg px-8 py-4 inline-flex items-center"
          >
            See Technologies in Action
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;