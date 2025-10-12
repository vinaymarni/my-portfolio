import React from 'react'
import "../styles/banner.css";
import { data, myDetails } from '../assets/data';
import { useAtomValue } from 'jotai';

function Banner() {
  const {mode} = useAtomValue(data);
  const name = myDetails.get("name");
  const url = myDetails.get("profile");
  return (
    <div id='home' className='bannerMainSection'>
      <div className='bannerLeftCon'>
        <p className={`bannerText ${mode !== "light" ? "bannerTextDark" : ""}`}>
          Hi 👋,<br/>
          My name is<br/>
          <span className='nameSpanEl'>{name}</span><br/>
          I build things for web
        </p>
      </div>
      <div className='bannerRightCon'>
        <div className='profileImageCon'>
          <img 
            src={url}
            alt="Profile"
            title={name}
            className='profileImage'
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
