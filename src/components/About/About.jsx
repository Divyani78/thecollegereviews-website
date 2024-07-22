import React, { useState, useEffect } from 'react';
import './Aboutpage.css';
import aboutImage from '../Assets/About-image.jpg';
import box1Image from '../Assets/box1.jpg'; // Update these paths
import box2Image from '../Assets/box2.jpg';
import box3Image from '../Assets/box3.jpg';

const About = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Welcome to Our Website",
    "Empowering Minds",
    "Shaping Futures",
    "Excellence in Education"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page-container">
      <div className="text-container">
        <h1 className="transition-text">{texts[textIndex]}</h1>
      </div>
      <img src={aboutImage} alt="About" className="about-image" />
      <div className="boxes-container">
        <div className="box">
          <img src={box1Image} alt="Box 1" />
          <div className="box-overlay">
            <p>Learn About Top MBA Colleges all over India.
            Our website is your ultimate resource for finding top MBA colleges across India,
             providing comprehensive details on each institution.
              From admission criteria and course offerings to faculty profiles and campus facilities,
               we offer all the information you need to make an informed decision about your future
                in business education. Explore our site to discover the best MBA programs
                 tailored to your career goals.
            </p>
          </div>
        </div>
        <div className="box">
          <img src={box2Image} alt="Box 2" />
          <div className="box-overlay">
            <p>No Worries! We Found your dream Colleges just come with us.
            Our website is your go-to platform for discovering your dream colleges across India,
             offering extensive details on each institution. Whether you're looking for information on admission
              requirements, courses, faculty, or campus life, we provide all the insights you need.
               Explore our site to find the perfect college that aligns with your academic and career aspirations.
            </p>
          </div>
        </div>
        <div className="box">
          <img src={box3Image} alt="Box 3" />
          <div className="box-overlay">
            <p>Find out top UG and PG Colleges all over India.
            Our website is your comprehensive guide to finding top UG and PG program colleges across India,
             offering detailed information on each institution. From admission requirements and academic programs
              to faculty qualifications and campus amenities, we provide all the insights you need.
               Explore our site to discover the best colleges that match your educational and career goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;