import React, { useState } from 'react';
import '../styles/Contact.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Setup for future to receive emails
    console.log('Form submitted:', formData);

    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <label className="form-label">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="form-input"
      />

      <label className="form-label">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        className="form-input"
      />

      <label className="form-label">Subject:</label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Enter the subject"
        className="form-input"
      />

      <label className="form-label">Message:</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Type your message"
        className="form-input"
      />

      <button type="button" onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default Contact;