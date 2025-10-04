import React from 'react';
import "../styles/about.css";
import { building, calender, location } from '../assets/commonSvgs';
import { otherDetails } from '../assets/data';

function Card({keyName}) {
  const data = otherDetails.get(keyName);
  const { name, logo, city, joinDate, endDate, role, type, keyPoints } = data
  return (
    <div className='experienceCard'>
      <div className='experienceCardInnerCon'>
        <p className='rollText'>{role}</p>
        <p className='roleTime'>{type}</p>
      </div>
      <div className='experienceCardInnerCon'>
        <p className='iconAndText'>{building} {name}</p>
        <p className='iconAndText'>{location} {city}</p>
        <p className='iconAndText lastText'>{calender} {joinDate}{endDate !== "" ? ` - ${endDate}` : ""}</p>
      </div>
    </div>
  )
};

function About() {
  return (
    <div id='about' style={{ alignItems: 'flex-start', textAlign: 'left' }} className='techStackMainSection'>
      <h2 className='aboutSectionHeading'>About Me</h2>
      <p className='aboutText'>
        The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
      </p>
      <h2 className='aboutSectionHeading'>Work Experience</h2>
      <Card keyName="BFC" />
      <Card keyName="RP CLAN" />
      <h2 className='aboutSectionHeading'>Education</h2>
      <Card keyName="BTech" />
      <Card keyName="Diploma" />
    </div>
  )
};

export default About;
