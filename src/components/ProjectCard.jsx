import React from 'react'
import { GithubSvg, LinkSvg } from '../assets/commonSvgs'
import { useAtomValue } from 'jotai';
import { data } from '../assets/data';

function ProjectCard({data: cardData}) {
  const {mode} = useAtomValue(data);
  
  const {name, description, technologiesUsed, coverImage} = cardData;
  const linksClass = `cardLinksTag ${mode !== "light" ? "techSectionHeadingDark" : ""}`;

  return (
    <div className={`projectCard ${mode !== "light" ? "projectCardConDark" : ""}`}>
      <div className='cardSkillBox'>
        {technologiesUsed.map((each, ind)=>{
          if(ind < 6){
          return(
            <img 
                alt={each.name}
                title={each.name}
                src={each.url}
                className='cardSkillBoxImage'
            />
          )}
        })}
      </div>
      <div className='projectCardImgCon'>
        <img 
            alt={name}
            src={coverImage}
            className='projectCardImg'
            title={name}
        />
      </div>
      <div className="projectCardBottomCon">
        <h3 className='projectNameText'>{name}</h3>
        <p className='projectContant'>{description}</p>
        <p className='projectTechStack'><span>Tech stack :</span>{technologiesUsed.map(each=>each.name).join(", ")}</p>
      </div>
      <div className='linksCon'>
            <a href='' className='cardLinksTag'>
                <LinkSvg className="linksSvg"/>
                <span>Live Preview</span>
            </a>
            <a href='' className='cardLinksTag'>
                <GithubSvg className="linksSvg"/>
                <span>View Code</span>
            </a>
      </div>
    </div>
  )
}

export default ProjectCard;
