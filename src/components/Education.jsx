import React from 'react';
import "../styles/about.css";
import { Card } from '../otherComponents/WorkOrEducationCard'
import { data } from '../assets/data';
import { useAtomValue } from 'jotai';

function Education() {
    const {mode} = useAtomValue(data);
    const headingClass = `aboutSectionHeading ${mode !== "light" ? "techSectionHeadingDark" : ""}`;
    return (
        <>
            <h2 id='Education' className={headingClass}>Education</h2>
            <Card mode={mode} keyName="BTech" />
            <Card mode={mode} keyName="Diploma" />
        </>
    )
}

export default Education
