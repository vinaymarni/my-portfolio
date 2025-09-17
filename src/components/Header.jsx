import React from 'react'
import { data, sectionsData } from '../assets/data';
import Button from "../commonComponents/Button";
import "../styles/header.css";
import { GithubSvg, LinkdinSvg } from '../assets/commonSvgs';
import { useAtomValue } from 'jotai';
import ModeDropDown from '../commonComponents/ModeDropDown';

function Header() {
  const {mode} = useAtomValue(data);
  const allSections = sectionsData.get("sections");
  return (
    <div style={{ background: mode === "light" ? "white" : "black" }} className='header-main-con'>
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
          <GithubSvg />
          <LinkdinSvg />
          <ModeDropDown />
        </div>
      </div>
    </div>
  )
}

export default Header;
