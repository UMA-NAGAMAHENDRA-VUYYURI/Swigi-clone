import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_t8gkgs9', 'template_s9l32nl', formData, 't9E6gAY3CYERvEBA7')
      .then((res) => {
        alert('Message sent successfully! ' + res.status);
      })
      .catch((err) => {
        console.error('Failed to send message:', err);
      });
  };

  return (
    <div id="contactme" className="contact-back">
      <div className="contact-form">
        <div className="contc"><h1>Any Queries ??</h1></div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Phone Number :</label>
            <input
              type="tel"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-pink">
            Send Message <i className="submit-icon fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <footer className="copyright">
        © 2024 Swiggy India. All rights reserved.
      </footer>
    </div>
  );
};

export default ContactForm;
