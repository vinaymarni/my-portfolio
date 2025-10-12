import React, { useState } from 'react';
import "../styles/about.css";
import { Card } from '../otherComponents/WorkOrEducationCard';
import { data } from '../assets/data';
import { useAtomValue } from 'jotai';
import ExpereinceDetails from '../otherComponents/Expereince';
import Button from '../commonComponents/Button';

function Experience() {
    const {mode} = useAtomValue(data);
    const [viewMore, setViewMore] = useState(false);
    const headingClass = `aboutSectionHeading ${mode !== "light" ? "techSectionHeadingDark" : ""}`;
    return (
        <>
            <div className='ExperienceHeader'>
                <h2 id="Experience" className={headingClass}>Work Experience</h2>
                <Button
                    key="ExperienceViewMore"
                    buttonClassName="experienceViewMoreBtn"
                    name="Click to view more Details"
                    title={viewMore ? "View Less" : "View More"}
                    buttonConClassName="footerSectionButtonCon"
                    onSubmit={()=> setViewMore(prev => !prev)}
                />
            </div>
            <Card mode={mode} keyName="BFC" />
            <Card mode={mode} keyName="RP CLAN" />

            {/* more details section */}
            {viewMore && <ExpereinceDetails />}
        </>
    )
}

export default Experience
