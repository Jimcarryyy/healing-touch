
import React from 'react';
import { Stethoscope } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      credentials: "MD, FACC",
      languages: ["English", "Spanish"],
      philosophy: "Preventive care is the foundation of heart health."
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Pediatrician",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
      credentials: "MD, FAAP",
      languages: ["English", "Mandarin"],
      philosophy: "Every child deserves compassionate, comprehensive care."
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Internal Medicine",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
      credentials: "MD, FACP",
      languages: ["English", "Spanish", "Portuguese"],
      philosophy: "Building lasting relationships for lifelong health."
    },
    {
      name: "Dr. David Kim",
      specialty: "Emergency Medicine",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
      credentials: "MD, FACEP",
      languages: ["English", "Korean"],
      philosophy: "Quick thinking and compassionate care in critical moments."
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Medical Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our board-certified physicians and specialists are dedicated to providing 
            exceptional care with years of experience and ongoing medical education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '20px 20px 60px #d1d5db, -20px -20px 60px #ffffff'
              }}
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-200 to-green-200 p-1">
                  <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
                    <Stethoscope className="w-12 h-12 text-gray-500" />
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {doctor.experience}
                  </div>
                </div>
              </div>

              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                <p className="text-blue-600 font-semibold">{doctor.specialty}</p>
                <p className="text-sm text-gray-500">{doctor.credentials}</p>
                
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">Languages:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {doctor.languages.map((lang, langIndex) => (
                      <span 
                        key={langIndex}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-gray-600 italic">"{doctor.philosophy}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
