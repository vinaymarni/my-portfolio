import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import "../styles/projects.css";
import { data, myDetails, projectDetails } from '../assets/data';
import CardsCarousal from '../commonComponents/CardsCarousal';
import { blocksIcon, swipeIcon } from '../assets/commonSvgs';
import Button from '../commonComponents/Button';
import { useAtomValue } from 'jotai';

function Projects() {
  const {mode} = useAtomValue(data);
  const [viewType, setViewType] = useState(false);
  const projects = myDetails.get("projects");
  return (
    <div id='projects' className='techStackMainSection'>
      <h2 className={`techSectionHeading ${mode !== "light" ? "techSectionHeadingDark" : ""}`}>Projects</h2>
      <p className={`techSectionText ${mode !== "light" ? "techSectionTextDark" : ""}`}>Things I’ve built so far</p>
      <div className='projectBtnsCon'>
        <Button
                key="projectSwipe"
                buttonClassName="projectSwipeButton"
                icon={viewType ? blocksIcon : swipeIcon}
                onSubmit={()=>setViewType(prev => !prev)}
              />
        
      </div>
      {viewType ?
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
      :
      <div className='ProjectCardsCon'>
        {projects.map(eachProj=>{
          const data = projectDetails.get(eachProj);
          return(
            <ProjectCard 
              key={eachProj}
              data={data}
            />
          )
        })}
      </div>
      }
      
    </div>
  )
}

export default Projects;
