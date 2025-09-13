import React from 'react';
import ProjectCard from './ProjectCard';
import "../styles/projects.css";

function Projects() {
  return (
    <div className='techStackMainSection'>
      <h2 className='techSectionHeading'>Projects</h2>
      <p className='techSectionText'>Things I’ve built so far</p>
      <div className='ProjectCardsCon'>
        <ProjectCard />
      </div>
      
    </div>
  )
}

export default Projects;
