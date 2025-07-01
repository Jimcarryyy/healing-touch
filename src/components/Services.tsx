
import React from 'react';
import { Heart, User, Calendar, Search, Stethoscope, Hospital } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Primary Care",
      description: "Comprehensive healthcare for all ages with preventive care and wellness programs.",
      features: ["Annual check-ups", "Chronic disease management", "Immunizations"]
    },
    {
      icon: User,
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents in a child-friendly environment.",
      features: ["Newborn care", "Growth monitoring", "Behavioral health"]
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Advanced heart care with state-of-the-art diagnostic and treatment options.",
      features: ["Heart screenings", "Interventional procedures", "Cardiac rehabilitation"]
    },
    {
      icon: Search,
      title: "Diagnostics",
      description: "Comprehensive diagnostic services with advanced imaging and laboratory capabilities.",
      features: ["Digital X-ray", "MRI & CT scans", "Laboratory services"]
    },
    {
      icon: Stethoscope,
      title: "Telemedicine",
      description: "Convenient virtual consultations for follow-ups and routine care from home.",
      features: ["Video consultations", "Remote monitoring", "Digital prescriptions"]
    },
    {
      icon: Hospital,
      title: "Emergency Care",
      description: "24/7 emergency services with rapid response and critical care capabilities.",
      features: ["Trauma care", "Emergency surgery", "Critical care unit"]
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50"
      aria-labelledby="services-heading"
      tabIndex={-1}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            id="services-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services delivered by expert medical professionals 
            using advanced technology and compassionate care.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="region"
          aria-label="Medical services offered"
        >
          {services.map((service, index) => (
            <article 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
              tabIndex={0}
              aria-labelledby={`service-${index}-title`}
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl mr-4">
                  <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 
                  id={`service-${index}-title`}
                  className="text-xl font-bold text-gray-900"
                >
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul 
                className="space-y-2"
                aria-label={`${service.title} features`}
              >
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" aria-hidden="true"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-1 transform transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                aria-label={`Learn more about ${service.title} services`}
              >
                Learn More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
