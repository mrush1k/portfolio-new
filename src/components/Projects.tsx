import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: 'Seagull Vision Website',
      description: 'A modern, responsive website for a computer vision company featuring product showcases, team information, and contact forms with immersive design.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/mrush1k',
      liveUrl: 'https://seagullvision.tech/',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing skills, projects, and professional experience with a unique, interactive design and fluid animations.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      techStack: ['Vite.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/mrush1k/portfolio-new',
    },
    {
      title: 'TaskFlow App',
      description: 'A full-stack task management application with user authentication, task categorization, real-time updates, and modern UI design.',
      image: 'https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com/mrush1k/Task-Manager',
      liveUrl: 'https://task-manager-delta-two-10.vercel.app/',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section id="projects" className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dusky-cyan/5 via-phthalo-base/10 to-deep-teal/8 pointer-events-none" />
      
      <div ref={ref} className="section-container relative z-10">
        <h2 className="heading text-center">Featured Projects</h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              className="card group overflow-hidden relative cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10">
                <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-near-black-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-phthalo-base/80 rounded-full hover:bg-electric-lime/20 transition-colors duration-300 cursor-pointer backdrop-blur-sm"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-6 h-6 text-electric-lime" />
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-phthalo-base/80 rounded-full hover:bg-electric-lime/20 transition-colors duration-300 cursor-pointer backdrop-blur-sm"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-6 h-6 text-electric-lime" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="font-mono text-xl font-bold text-electric-lime mb-3 group-hover:text-electric-lime transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white-soft/80 mb-6 group-hover:text-white-soft transition-colors duration-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-electric-lime/10 text-electric-lime px-3 py-1.5 rounded-full font-mono hover:bg-electric-lime/20 transition-colors duration-300 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-6">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-white-soft hover:text-electric-lime transition-colors duration-300 cursor-pointer font-mono font-semibold"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-white-soft hover:text-electric-lime transition-colors duration-300 cursor-pointer font-mono font-semibold"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;