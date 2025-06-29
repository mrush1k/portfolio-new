import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  keywords: string[];
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      title: 'Full Stack Developer',
      company: 'Seagull Vision',
      location: 'Remote (Based in Ahmedabad)',
      period: 'Jan 2023 - Present',
      description: [
        'Leading frontend development using React and Next.js for enterprise applications',
        'Designing and implementing responsive UI/UX for web applications',
        'Building scalable backend services with Node.js and Express',
        'Collaborating with cross-functional teams to deliver high-quality solutions',
      ],
      keywords: ['React', 'Next.js', 'Node.js', 'UI/UX Design', 'Frontend Development'],
    },
    {
      title: 'Frontend Developer & UI Designer',
      company: 'Creat Infotech',
      location: 'Ahmedabad, Gujarat, India',
      period: 'Jun 2021 - Dec 2022',
      description: [
        'Developed modern, responsive user interfaces using React and Material-UI',
        'Created intuitive UI/UX designs for web and mobile applications',
        'Implemented state management solutions using Redux and Context API',
        'Optimized web performance and loading times for better user experience',
      ],
      keywords: ['Frontend Development', 'UI/UX Design', 'React', 'Redux', 'Material-UI'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-phthalo-base/8 via-dusky-cyan/12 to-deep-teal/6 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <h2 className="heading text-center">Professional Experience</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-10"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={`${exp.company}-${index}`}
              variants={itemVariants}
              className="relative"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-phthalo-base border-2 border-electric-lime flex items-center justify-center flex-shrink-0 shadow-lg shadow-electric-lime/20">
                    <Briefcase className="w-6 h-6 text-electric-lime" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-xl font-bold text-electric-lime mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-white-soft/90 font-semibold text-lg mb-2">
                      {exp.company}
                    </h4>
                  </div>
                </div>
                
                <div className="ml-16 space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center text-electric-lime">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-mono font-semibold text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-white-soft/70">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="font-mono text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-white-soft/80">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start leading-relaxed text-sm">
                        <span className="text-electric-lime mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.keywords.map((keyword, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-electric-lime/10 text-electric-lime px-2 py-1 rounded-full font-mono font-semibold border border-electric-lime/20"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex md:items-start md:space-x-8">
                <div className="w-12 h-12 rounded-full bg-phthalo-base border-2 border-electric-lime flex items-center justify-center flex-shrink-0 shadow-lg shadow-electric-lime/20">
                  <Briefcase className="w-6 h-6 text-electric-lime" />
                </div>
                
                {/* Date and Location */}
                <div className="w-1/3">
                  <div className="flex items-center text-electric-lime mb-2">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-mono font-semibold">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-white-soft/70">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="font-mono">{exp.location}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-2/3">
                  <h3 className="font-mono text-2xl font-bold text-electric-lime mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-white-soft/90 font-semibold text-lg mb-4">
                    {exp.company}
                  </h4>
                  <ul className="space-y-3 text-white-soft/80 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start leading-relaxed">
                        <span className="text-electric-lime mr-3 mt-1 text-lg">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {exp.keywords.map((keyword, i) => (
                      <span 
                        key={i}
                        className="text-sm bg-electric-lime/10 text-electric-lime px-3 py-1.5 rounded-full font-mono font-semibold border border-electric-lime/20"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;