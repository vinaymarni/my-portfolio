import React from 'react'
import { GithubSvg, LinkSvg } from '../assets/commonSvgs'

function ProjectCard() {
  return (
    <div className='projectCard'>
      <div className='projectCardImgCon'>
        <img 
            alt={"projectName"}
            src=''
            className='projectCardImg'
            title={"projectName"}
        />
      </div>
      <div className='projectCardBottomCon'>
        <h3 className='projectNameText'>Project Tile goes here</h3>
        <p className='projectContant'>
            This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
        </p>
        <p className='projectTechStack'><span>Tech stack :</span> HTML , JavaScript, SASS, React</p>
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
