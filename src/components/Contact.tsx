
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    date: '',
    time: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.department) newErrors.department = 'Please select a department';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    if (!formData.consent) newErrors.consent = 'Consent is required to proceed';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Focus first error field
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
      errorElement?.focus();
      return;
    }

    console.log('Appointment request:', formData);
    alert('Thank you! We will contact you shortly to confirm your appointment.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      date: '',
      time: '',
      message: '',
      consent: false
    });
  };

  const departments = [
    'Primary Care',
    'Pediatrics',
    'Cardiology',
    'Diagnostics',
    'Emergency Care',
    'Telemedicine'
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-white"
      aria-labelledby="contact-heading"
      tabIndex={-1}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Schedule Your Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience exceptional healthcare? Book your appointment today 
            and take the first step towards better health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div 
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8" 
            style={{ boxShadow: 'inset 20px 20px 60px #d1d5db, inset -20px -20px 60px #ffffff' }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Appointment</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    style={{ boxShadow: 'inset 8px 8px 16px #d1d5db, inset -8px -8px 16px #ffffff' }}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    style={{ boxShadow: 'inset 8px 8px 16px #d1d5db, inset -8px -8px 16px #ffffff' }}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    style={{ boxShadow: 'inset 8px 8px 16px #d1d5db, inset -8px -8px 16px #ffffff' }}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    Department *
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.department ? 'true' : 'false'}
                    aria-describedby={errors.department ? 'department-error' : undefined}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    style={{ boxShadow: 'inset 8px 8px 16px #d1d5db, inset -8px -8px 16px #ffffff' }}
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  {errors.department && (
                    <p id="department-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.department}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.date ? 'true' : 'false'}
                    aria-describedby={errors.date ? 'date-error' : undefined}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    style={{ boxShadow: 'inset 8px 8px 16px #d1d5db, inset -8px -8px 16px #ffffff' }}
                  />
                  {errors.date && (
                    <p id="date-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.date}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.time ? 'true' : 'false'}
                    aria-describedby={errors.time ? 'time-error' : undefined}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    style={{ boxShadow: 'inset 8px 8px 16px #d1d5db, inset -8px -8px 16px #ffffff' }}
                  >
                    <option value="">Select Time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                  </select>
                  {errors.time && (
                    <p id="time-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  style={{ boxShadow: 'inset 8px 8px 16px #d1d5db, inset -8px -8px 16px #ffffff' }}
                  placeholder="Please describe your concern or reason for visit..."
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.consent ? 'true' : 'false'}
                  aria-describedby="consent-description consent-error"
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <div>
                  <label htmlFor="consent" className="text-sm text-gray-600" id="consent-description">
                    I consent to being contacted by Serenity Health Systems regarding my appointment 
                    and understand that my personal information will be handled according to our privacy policy. *
                  </label>
                  {errors.consent && (
                    <p id="consent-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.consent}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-describedby="submit-description"
              >
                Book Appointment
              </button>
              <p id="submit-description" className="sr-only">
                Submit your appointment request form
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl">
                    <Phone className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:+15551234567" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                        (555) 123-4567
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">24/7 Emergency Line</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <address className="text-gray-600 not-italic">
                      123 Healthcare Boulevard<br />
                      Medical District, State 12345
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl">
                    <Clock className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <a
                  href="tel:+15551234567"
                  className="w-full bg-white/80 backdrop-blur-sm text-blue-600 py-3 px-4 rounded-xl font-semibold hover:bg-white hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span>Call Now</span>
                </a>
                <button 
                  className="w-full bg-white/80 backdrop-blur-sm text-green-600 py-3 px-4 rounded-xl font-semibold hover:bg-white hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  aria-label="Access online patient portal"
                >
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  <span>Online Portal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
