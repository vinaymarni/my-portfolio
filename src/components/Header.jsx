import React from 'react'
import { sectionsData } from '../assets/data';
import Button from "../commonComponents/Button";
import "../styles/header.css";
import { GithubSvg, LinkdinSvg, ModeSwitchSvg } from '../assets/commonSvgs';

function Header() {
  const allSections = sectionsData.get("sections");
  console.log(allSections)
  return (
    <div className='header-main-con'>
      <div className='header-left-con'>
        <h1 className='header-profile-name'>{`{${"007"}}`}</h1>
        <p className='header-profile-name header-profile-bottom-name'>vinay</p>
      </div>
      <div className='header-right-con'>
        <div className='header-sections-con'>
          {allSections.map(eachSection => {
            const sectionData = sectionsData.get(eachSection);
            console.log(sectionData)
            return(
              <Button
                key={`${eachSection}_button`}
                buttonClassName="sectionButton"
                name={eachSection}
                title={sectionData.title}
                buttonConClassName="sectionButtonCon"
              />
            )
          })}
        </div>

        <div className='header-sections-con header-social-con'>
          <ModeSwitchSvg className="modeIcon" />
          <GithubSvg />
          <LinkdinSvg />
        </div>

        

      </div>
    </div>
  )
}

export default Header;
