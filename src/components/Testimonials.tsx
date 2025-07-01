
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "The care I received at Serenity Health was exceptional. Dr. Johnson took the time to explain everything and made me feel comfortable throughout my treatment.",
      patient: "M.S.",
      treatment: "Cardiac Care",
      rating: 5
    },
    {
      quote: "Outstanding pediatric care for my daughter. Dr. Chen was gentle, patient, and thorough. The staff made our visit stress-free and welcoming.",
      patient: "R.L.",
      treatment: "Pediatrics",
      rating: 5
    },
    {
      quote: "Professional, compassionate, and efficient. The telemedicine service saved me time while providing excellent follow-up care. Highly recommended!",
      patient: "J.D.",
      treatment: "Telemedicine",
      rating: 5
    },
    {
      quote: "Emergency care when I needed it most. The team was quick, professional, and caring during a very stressful situation. Thank you for everything.",
      patient: "A.K.",
      treatment: "Emergency Care",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from real patients who have trusted us with their healthcare needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 hover:bg-white/70 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl text-blue-500 mb-6">"</div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                {testimonials[currentIndex].quote}
              </blockquote>
              
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                ))}
              </div>
              
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-900">
                  {testimonials[currentIndex].patient}
                </p>
                <p className="text-blue-600 font-medium">
                  {testimonials[currentIndex].treatment}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">1,200+</div>
            <div className="text-gray-600">Patient Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
