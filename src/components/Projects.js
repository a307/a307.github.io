import React from 'react';
import './Projects.css';
import { Link } from 'react-scroll';
import DawsonConstructionImage from './DawsonConstruction.jpg';
import VanGoghCafeImage from './VanGoghCafe.jpg';
import MusicRecommendationImage from './music.jpg';


const projectData = [
  {
    title: 'JSON Form Rendering Capstone Project',
    image: DawsonConstructionImage,
    description: 'For my capstone project at TRU, I and a team of others built a form rendering application in flutter for Dawson Construction. It converts raw JSON files into forms for employees on various work sites.',
    repoLink: 'https://github.com/a307/tru-dawson-project'
  },
  {
    title: 'AI Van Gogh Art Generator',
    image: VanGoghCafeImage,
    description: 'I created GAN artificial intelligence model that created new artworks based off of all of Van Gogh\'s work.',
    repoLink: 'https://github.com/a307/GAN-VanGogh-ArtGen-AIproject'
  },
  {
    title: 'Data Mining Personality-based Music Recommendation Algorithm',
    image: MusicRecommendationImage,
    description: 'I created a music recommendation application using Power BI and Python integrated data mining techinques.',
    repoLink: 'https://github.com/a307/data-mining-music-personality-recommendations'
  }
];


const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <p className="description">{project.description}</p>
              </div>
            </div>
            <h3>{project.title}</h3>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              View Repo
            </a>
          </div>
        ))}
      </div>
      <Link to="experience" smooth={true} duration={500}>
        <button className="scroll-button">My Experience</button>
      </Link>
    </section>
  );
};

export default Projects;
