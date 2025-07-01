
import React from 'react';
import { Heart, User, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Every decision we make puts our patients' health and comfort first."
    },
    {
      icon: CheckCircle,
      title: "Medical Excellence",
      description: "Board-certified specialists using the latest medical technologies."
    },
    {
      icon: User,
      title: "Innovative Care",
      description: "Pioneering treatment approaches for better health outcomes."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-white"
      aria-labelledby="about-heading"
      tabIndex={-1}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            About Serenity Health Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to transform healthcare delivery, we've been serving our 
            community for over two decades with unwavering commitment to excellence and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To provide exceptional healthcare services that combine clinical expertise with 
              genuine compassion, ensuring every patient receives personalized care in a 
              healing environment that promotes wellness and recovery.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe healthcare should be accessible, comprehensive, and delivered with 
              the highest standards of medical practice and human kindness.
            </p>
          </div>
          
          <div className="relative">
            <div 
              className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 h-80 flex items-center justify-center"
              role="img"
              aria-label="25 years of trusted healthcare service"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-4">
                  <Heart className="w-10 h-10 text-white" aria-hidden="true" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">25 Years</h4>
                <p className="text-gray-600">of Trusted Care</p>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          role="region"
          aria-label="Our core values"
        >
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
              style={{
                boxShadow: '20px 20px 60px #d1d5db, -20px -20px 60px #ffffff'
              }}
              tabIndex={0}
              role="article"
              aria-labelledby={`value-${index}-title`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-6">
                <value.icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h4 
                id={`value-${index}-title`}
                className="text-xl font-bold text-gray-900 mb-4"
              >
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
