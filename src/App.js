import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Links from './components/Links';
import { Link, Element } from 'react-scroll';
import profilePic from './components/profile-pic.jpg'; // Adjust the path to your profile picture


function App() {
  return (
    <div className="App">
      <Header />
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="links">
        <Links />
      </Element>
      <nav className="navigation">
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="experience" smooth={true} duration={500}>Experience</Link>
        <Link to="links" smooth={true} duration={500}>Links</Link>
      </nav>
    </div>
  );
}

export default App;

