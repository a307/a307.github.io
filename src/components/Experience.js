import React from 'react';
import './Experience.css';
import { Link } from 'react-scroll';
import bclcImage from './bclc.jpg';
import raptorImage from './raptor.jpg';
import traqsperaImage from './traqspera.jpg';
import truImage from './tru.jpg';

const experienceData = [
  {
    company: 'BCLC',
    position: 'Technology Innovation Co-op',
    image: bclcImage,
    description: 'At BCLC, I worked with a team to build automated regression tests in Selenium as well as automated server monitoring with Dynatrace and ServiceNow.'
  },
  {
    company: 'Raptor Integration',
    position: 'Software Developer Co-op',
    image: raptorImage,
    description: 'At Raptor, I worked as a software developer using .NET languages to created and maintain lumber scanning software.'
  },
  {
    company: 'Trimble View point (Formerly Traqspera)',
    position: 'Software Tester Co-op',
    image: traqsperaImage,
    description: 'At Traqspera, I worked primarily as a software tester. Conducting manual and regression tests for their main timesheet application.'
  },
  {
    company: 'TRU IT Services',
    position: 'Software Analyst Co-op',
    image: truImage,
    description: 'At TRU, I was responsible for cleaning and preprocessing all IT data into a cloud software service.'
  }
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="image-container">
              <img src={exp.image} alt={exp.company} className="experience-image" />
              <div className="overlay">
                <p className="description">{exp.description}</p>
              </div>
            </div>
            <div className="details">
              <h3>{exp.company}</h3>
              <p>{exp.position}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="links" smooth={true} duration={500}>
        <button className="scroll-button">My Links</button>
      </Link>
    </section>
  );
};

export default Experience;
