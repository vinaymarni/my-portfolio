import React from 'react'
import "../styles/banner.css";
import { myDetails } from '../assets/data';

function Banner() {
  const name = myDetails.get("name");
  return (
    <div id='home' className='bannerMainSection'>
      <div className='bannerLeftCon'>
        <p className='bannerText'>
          Hi 👋,<br/>
          My name is<br/>
          <span className='nameSpanEl'>{name}</span><br/>
          I build things for web
        </p>
      </div>
      <div className='bannerRightCon'>
        <div className='profileImageCon'>

        </div>
      </div>
    </div>
  )
}

export default Banner
