import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './scroll.css'; // Import the CSS file

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 800 pixels
  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 transition-transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <button
        onClick={scrollToTop}
        className="p-6  text-white rounded-full shadow-lg  transition duration-300"
        style={{ backgroundColor: '#31d9ff' }}
      >
        <FaArrowUp  className='text-1xl'></FaArrowUp>
      </button>
    </div>
  );
};

export default Scroll;