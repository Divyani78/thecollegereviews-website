import React, { useState } from 'react';
import './ContactUs.css';
import collegeImage from '../Assets/college-image.jpg'; // Update this path

const ContactUs = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { username, email, phone });
    setUsername('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="contact-us-container">
      <img src={collegeImage} alt="College" className="background-image" />
      <div className="content-wrapper">
        <div className="contact-us-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
            />
            <button type="submit">Submit</button>
          </form>
          <h3>We will Contact You Soon!!</h3>
        </div>
        <div className="right-container">
          <h2>Find out with us!!</h2>
          <p>Embark on your journey to discover your dream college
             with excitement and confidence!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;