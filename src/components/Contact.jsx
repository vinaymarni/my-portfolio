import { useAtomValue } from 'jotai';
import React from 'react'
import { data } from '../assets/data';
import "../styles/about.css";

function Contact() {
  const {mode} = useAtomValue(data);
  
  return (
    <div id='contact' className='techStackMainSection'>
      <p className={`contactText ${mode !== "light" ? "techSectionHeadingDark" : ""}`}>For any questions please mail us:</p>
      <p className='contactEmailText'>hi@pavanmg.in</p>
    </div>
  )
}

export default Contact
