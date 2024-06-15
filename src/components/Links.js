import React from 'react';
import './Links.css';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons library

const Links = () => {
  return (
    <section className="links">
      <h2>Links</h2>
      <div className="icon-links">
        <a href="https://github.com/a307" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" size ={40}/>
        </a>
        <a href="https://www.linkedin.com/in/sean-b-6abb91198/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon"  size ={40}/>
        </a>
      </div>
    </section>
  );
};

export default Links;
