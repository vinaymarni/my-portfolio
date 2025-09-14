import React, { useState } from 'react';
import "../styles/techStack.css"
import { myDetails, otherDetails } from '../assets/data';
import Button from '../commonComponents/Button';

function TechStack() {
  const [showMore, setShowMore] = useState(false);
  const skills = myDetails.get("skills");
  return (
    <div className='techStackMainSection'>
      <h2 className='techSectionHeading'>My Tech Stack</h2>
      <p className='techSectionText'> Technologies I’ve been working with recently</p>
      <div className='skillsCon' style={{ height: showMore ? "auto" : "330px" }}>
        {skills.map(each=>{
          const skills = otherDetails.get(each);
          const subSkills = skills.technologies;
          return subSkills.map(subSkill=>{
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
      <Button
                key={`show_more_button`}
                buttonClassName="skillShowButton"
                name={showMore ? "Show Less" : "Show More"}
                title={showMore ? "Show Less" : "Show More"}
                toolTip={`Click to ${showMore ? "Show Less" : "Show More"} Skills`}
                buttonConClassName="footerSectionButtonCon"
                onSubmit={()=>setShowMore(!showMore)}
              />
    </div>
  )
}

export default TechStack;
