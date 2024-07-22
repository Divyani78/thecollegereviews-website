// FlashMessage.jsx

import React, { useEffect, useState } from 'react';
import './Flashmessage.css';

const Flashmessage = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Message will disappear after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`flash-message ${type}`}>
      {message}
    </div>
  );
};

export default Flashmessage;
