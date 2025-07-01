
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
