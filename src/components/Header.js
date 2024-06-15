import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Sean Burke</h1>
      <p className="subtitle">Software Professional.</p>
      <Link to="about" smooth={true} duration={500}>
        <button className="scroll-button">About Me</button>
      </Link>
    </header>
  );
};

export default Header;
