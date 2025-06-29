import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedMesh from './components/AnimatedMesh';
import BlobCursor from './components/BlobCursor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-light relative">
      <AnimatedMesh />
      <BlobCursor />
      
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;