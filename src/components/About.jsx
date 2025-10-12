import React from 'react';
import "../styles/about.css";
import { data } from '../assets/data';
import { useAtomValue } from 'jotai';

function About() {
  const {mode} = useAtomValue(data);
  const headingClass = `aboutSectionHeading ${mode !== "light" ? "techSectionHeadingDark" : ""}`;
  const contentText = `aboutText ${mode !== "light" ? "techSectionTextDark" : ""}`
  return (
    <>
      <h2 id='about' className={headingClass}>About Me</h2>
      <p className={contentText}>
        The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
      </p>
    </>
  )
};

export default About;
