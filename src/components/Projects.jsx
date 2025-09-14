import React from 'react';
import ProjectCard from './ProjectCard';
import "../styles/projects.css";
import { myDetails, projectDetails } from '../assets/data';
import CardsCarousal from '../commonComponents/CardsCarousal';

function Projects() {
  const projects = myDetails.get("projects");
  return (
    <div className='techStackMainSection'>
      <h2 className='techSectionHeading'>Projects</h2>
      <p className='techSectionText'>Things I’ve built so far</p>
      <CardsCarousal
        allCards={projects.map(eachProj=>{
          const data = projectDetails.get(eachProj);
          return(
            <ProjectCard 
              key={eachProj}
              data={data}
            />
          )
        })}
        dataLength={projects.length}
        gap={20}
        scrollSize={350}
      />
      {/* <div className='ProjectCardsCon'>
        {projects.map(eachProj=>{
          const data = projectDetails.get(eachProj);
          return(
            <ProjectCard 
              key={eachProj}
              data={data}
            />
          )
        })}
      </div> */}
      
    </div>
  )
}

export default Projects;
