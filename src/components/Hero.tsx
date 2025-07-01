
import React from 'react';
import { Calendar, Search, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-4 h-4 bg-blue-400/30 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <div className="w-6 h-6 bg-green-400/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
          <div className="w-3 h-3 bg-blue-300/40 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-500">
          <div className="w-5 h-5 bg-green-300/40 rounded-full"></div>
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-1/4 animate-bounce delay-300">
          <Heart className="w-8 h-8 text-blue-400/20" />
        </div>
        
        {/* Wave Background */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-32 text-blue-50/50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 
              id="hero-heading"
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
            >
              Compassionate Care,
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Trusted Professionals
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Serenity Health Systems, we combine cutting-edge medical expertise with 
              personalized care to ensure your health and well-being are our top priority.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Book an appointment with our medical professionals"
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              <span>Book Appointment</span>
            </button>
            
            <button 
              className="group bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border border-gray-200 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Find a doctor or medical specialist"
            >
              <Search className="w-5 h-5" aria-hidden="true" />
              <span>Find a Doctor</span>
            </button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            role="region"
            aria-label="Healthcare statistics"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/70 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2" aria-label="25 plus years">25+</div>
              <div className="text-gray-700">Years of Excellence</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/70 transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2" aria-label="50 thousand plus patients">50k+</div>
              <div className="text-gray-700">Patients Served</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/70 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2" aria-label="98 percent satisfaction">98%</div>
              <div className="text-gray-700">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
