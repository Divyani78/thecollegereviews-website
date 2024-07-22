// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneSquareAlt, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const emailAddress = 'info@collegereviews.com';
  const youtubeChannelUrl = 'http://www.youtube.com/@TheCollegeReviews';

  return (
    <footer className="footer">
      <div className="footer-left">
        <Link to="/about" className='footer-link'>
          <h3>About Us</h3>
        </Link>
        <p>
          Discovering the ideal MBA program in India just got easier with our comprehensive platform. We offer concise yet detailed insights into the top MBA colleges across the country, assisting prospective students in making informed decisions. From curriculum details to faculty expertise, campus facilities to placement records, our site equips you with all the essential information to choose the perfect institution for your academic and professional journey. Streamline your search and unlock the doors to your future success with our user-friendly interface and reliable data.
        </p>
      </div>
      <div className="footer-right">
        <Link to="/contact" className='footer-link'>
          <h3>Contact</h3>
        </Link>
        <div className="contact-info">
          <a href={`mailto:${emailAddress}`}>
            <p>
              <TfiEmail className='email-icon' /> Email: <span className="email-address">{emailAddress}</span>
            </p>
          </a>
          <a href={`tel:+919125800871`}>
            <h2>
              <i className="fas fa-phone"></i><FaPhoneSquareAlt /> Phone: <span className='phone-number'>+91-9125800871</span>
            </h2>
          </a>
          <a href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer">
            <h4>
              <FaYoutube className='youtube-icon' /> YouTube: <span className='youtube-channel-name'>The College Reviews</span>
            </h4>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;