import React from 'react'
import { GithubSvg, LinkSvg } from '../assets/commonSvgs'

function ProjectCard({data}) {
  const {name, description, technologiesUsed, coverImage} = data;
  return (
    <div className='projectCard'>
      <div className='projectCardImgCon'>
        <img 
            alt={name}
            src={coverImage}
            className='projectCardImg'
            title={name}
        />
      </div>
      <div className='projectCardBottomCon'>
        <h3 className='projectNameText'>{name}</h3>
        <p className='projectContant'>{description}</p>
        <p className='projectTechStack'><span>Tech stack :</span>{technologiesUsed.map(each=>each.name).join(", ")}</p>
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
    </div>
  )
}

export default ProjectCard;
