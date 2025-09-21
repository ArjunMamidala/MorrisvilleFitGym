import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // You can send this data to your backend or email service
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-page">
      {/* Contact form section */}
      <section className="contact-form max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Contact Us</h2>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-lg text-gray-800">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-lg text-gray-800">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-lg text-gray-800">Your Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
              rows="6"
              placeholder="Enter your message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Information section */}
      <section className="contact-info max-w-4xl mx-auto px-4 py-16 bg-gray-50 mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Contact Information</h3>
        <div className="space-y-4 text-center">
          <p className="text-lg text-gray-600">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="text-lg text-gray-600">
            <strong>Email:</strong> contact@morrisvillefit.com
          </p>
          <p className="text-lg text-gray-600">
            <strong>Address:</strong> 123 Fitness St, Morrisville, NC 12345
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
