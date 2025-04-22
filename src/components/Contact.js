import React from 'react';
import '../styles/Contact.css'; // Make sure to import the CSS

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>Have a question, feedback, or need support? We're here to help!</p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="your@email.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Type your message here..." required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Reach Us At</h2>
          <p>Email: support@fooddash.com</p>
          <p>Phone: +91 9986961101</p>
          <p>Address: FoodDash, Marathahalli, Bengaluru, India</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
