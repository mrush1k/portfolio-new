import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credential: string;
  url: string;
}

const Certificates: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates: Certificate[] = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: 'December 2022',
      credential: 'CRED12345',
      url: 'https://www.coursera.org/',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: 'August 2022',
      credential: 'FCCA54321',
      url: 'https://www.freecodecamp.org/',
    },
    {
      title: 'React & Redux',
      issuer: 'Coursera',
      date: 'March 2022',
      credential: 'CRED67890',
      url: 'https://www.coursera.org/',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: 'May 2021',
      credential: 'FCCA09876',
      url: 'https://www.freecodecamp.org/',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="certificates" className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dusky-cyan/8 via-phthalo-base/10 to-deep-teal/12 pointer-events-none" />
      
      <div ref={ref} className="section-container relative z-10">
        <h2 className="heading text-center">Certifications</h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div 
              key={cert.credential} 
              variants={item}
              whileHover={{ scale: 1.03, y: -4 }}
              className="card relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute -right-6 -top-6 w-16 h-16 bg-electric-lime/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <Award className="w-10 h-10 text-electric-lime flex-shrink-0 group-hover:text-electric-lime transition-colors duration-300" />
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white-soft/70 hover:text-electric-lime transition-colors duration-300 cursor-pointer"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                
                <h3 className="font-mono text-lg font-bold text-electric-lime mb-2 group-hover:text-electric-lime transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-white-soft/90 font-semibold mb-3 group-hover:text-white-soft transition-colors duration-300">
                  {cert.issuer}
                </p>
                <p className="text-white-soft/70 text-sm mb-2 group-hover:text-white-soft/80 transition-colors duration-300">
                  Issued: {cert.date}
                </p>
                <p className="text-white-soft/50 text-xs font-mono group-hover:text-white-soft/70 transition-colors duration-300">
                  Credential: {cert.credential}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a 
            href="#contact" 
            className="btn-outline inline-flex items-center cursor-pointer text-lg px-8 py-4"
          >
            <span>Get in Touch</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;