import React, { useEffect, useRef } from 'react';
import './Header.css';
import Homepage1 from '../Assets/Homepage1.jpg';
import HomegimageI2 from '../Assets/HomepageI2.png';

const Header = () => {
  const overlayBtnRef = useRef(null);
  const nextPageRef = useRef(null);

  useEffect(() => {
    const handleTransition = () => {
      const heroImage = document.querySelector('.hero-image');
      const secondImage = document.querySelector('.second-image');
      const textOverlay = document.querySelector('.text-overlay');

      if (heroImage && secondImage && textOverlay) {
        heroImage.style.transform = 'translateX(-100%)';
        secondImage.style.transform = 'translateX(0)';
        secondImage.style.opacity = '1';
        textOverlay.style.opacity = '0';
      }
    };

    const timeoutId = setTimeout(handleTransition, 3000); // Trigger the transition after 3 seconds

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const currentOverlayBtnRef = overlayBtnRef.current;
    const currentNextPageRef = nextPageRef.current;

    const handleClick = () => {
      if (currentNextPageRef) {
        currentNextPageRef.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (currentOverlayBtnRef) {
      currentOverlayBtnRef.addEventListener('click', handleClick);
    }

    return () => {
      if (currentOverlayBtnRef) {
        currentOverlayBtnRef.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <div className="header">
      <div className="image-container">
        <div className="hero-image-wrapper">
          <img className="hero-image" src={Homepage1} alt="Hero Image" />
        </div>
        <div className="second-image">
          <img src={HomegimageI2} alt="Second Image" />
        </div>
        <div className="new-text-overlay">
          <h2>Find Your</h2>
          <h1>Perfect</h1>
          <h2>College Match</h2>
          <p>Discover the institution that aligns with your dreams, talents, and aspirations.</p>
          <button ref={overlayBtnRef} className="overlay-btn btn-transition">
            Start Your Journey
          </button>
        </div>
      </div>
      <div className="text-overlay">
        <div className="text-container">
          <h1>
            <div className="word-group">
              <span>STRESSED</span>
              <span>ABOUT</span>
            </div>
            <div className="word-group">
              <span>WHICH</span>
              <span>COLLEGE</span>
            </div>
            <div className="word-group">
              <span>IS</span>
              <span>BEST</span>
              <span>FOR</span>
            </div>
            <div className="word-group">
              <span>YOU...</span>
            </div>
          </h1>
        </div>
      </div>
      <div ref={nextPageRef} className="Posts">
        {/**/}
      </div>
    </div>
  );
};

export default Header;