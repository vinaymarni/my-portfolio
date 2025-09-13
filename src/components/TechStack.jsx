import React from 'react';
import "../styles/techStack.css"
import { myDetails } from '../assets/data';

function TechStack() {
  const skills = myDetails.get("skills");
  return (
    <div className='techStackMainSection'>
      <h2 className='techSectionHeading'>My Tech Stack</h2>
      <p className='techSectionText'> Technologies I’ve been working with recently</p>
      <div className='skillsCon'>
        {skills.map(each=>{
          const skills = myDetails.get(each);
          const subSkills = skills.technologies;
          return subSkills.map(subSkill=>{
            console.log(subSkill)
            return(
              <div key={each + subSkill.name} className='skillImageCon'>
                <img 
                  alt={subSkill.name} 
                  src={subSkill.url} 
                  className='skillImage' 
                  height="120"
                  width="120"
                  title={subSkill.name}
                />
              </div>
            )
          })
        })}
      </div>
    </div>
  )
}

export default TechStack;
