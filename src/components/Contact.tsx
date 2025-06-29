import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/10 via-phthalo-base/8 to-dusky-cyan/12 pointer-events-none" />
      
      <div ref={ref} className="section-container relative z-10">
        <h2 className="heading text-center">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-electric-lime/10 mb-6 border border-electric-lime/20">
                <Mail className="w-10 h-10 text-electric-lime" />
              </div>
              <h3 className="font-mono text-2xl font-semibold mb-4 text-electric-lime">
                Let's Connect
              </h3>
              <p className="text-white-soft/80 text-lg leading-relaxed">
                Have a question or want to work together? Drop me a message and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-mono text-white-soft mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-phthalo-base/30 border border-electric-lime/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-lime/50 focus:border-transparent text-white-soft backdrop-blur-sm"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-mono text-white-soft mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-phthalo-base/30 border border-electric-lime/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-lime/50 focus:border-transparent text-white-soft backdrop-blur-sm"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-mono text-white-soft mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-phthalo-base/30 border border-electric-lime/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-lime/50 focus:border-transparent text-white-soft resize-none backdrop-blur-sm"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={status.submitting || status.submitted}
                className="btn w-full flex items-center justify-center text-lg py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status.submitting ? (
                  <span className="flex items-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-near-black-green mr-3" />
                    Sending...
                  </span>
                ) : status.submitted ? (
                  <span className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    Sent Successfully!
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="w-6 h-6 mr-3" />
                    Send Message
                  </span>
                )}
              </motion.button>
              
              {status.error && (
                <p className="text-red-400 text-center font-mono">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;