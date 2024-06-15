import React from 'react';
import './About.css';
import profilePic from './profile-pic.jpg';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="content-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="info-container">
          <p className="about-text">
            I am a recently graduated computer science student with a passion for technology and innovation. I have completed multiple internships and projects, gaining hands-on experience in software development, data analysis, and problem-solving. I am currently seeking opportunities to apply my skills and knowledge in a new professional setting. Welcome to my portfolio website!
          </p>
        </div>
      </div>
      <div className="button-container">
        <Link to="projects" smooth={true} duration={500}>
          <button className="scroll-button">My Projects</button>
        </Link>
      </div>
    </section>
  );
};

export default About;
