import React from 'react';
import './Footer.css';  // We'll create this file next

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Simple Learn. All rights reserved.</p>
      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> | 
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a> | 
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
