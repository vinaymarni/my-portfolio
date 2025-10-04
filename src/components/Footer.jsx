import React from 'react'
import { myDetails, otherDetails, sectionsData } from '../assets/data'
import "../styles/footer.css"
import Button from '../commonComponents/Button';
import { LocationSvg } from '../assets/commonSvgs';

function Footer() {
  const mobile = myDetails.get("mobile");
  const email = myDetails.get("email");
  const social = myDetails.get("social");
  const address = myDetails.get("address");
  const allSections = sectionsData.get("sections");
  
  return (
    <div className='footer-main-con'>
      <div className='footer-inner-con'>
        <div className='header-left-con'>
          <h3 className='header-profile-name'>{`{${"007"}}`}</h3>
          <p className='header-profile-name header-profile-bottom-name'>vinay</p>
        </div>
        <div className='footer-contect-con'>
          <span>{mobile}</span>
          <span>{email}</span>
          <div className='footer-social-media-con'>
            {social.map(eachSocial=>{
              const data = otherDetails.get(eachSocial);
              const Tag = data.logo;
              return(
                <Tag 
                  key={data.name}
                  className="footerSocailIcon" 
                />
              )
            })}
          </div>
        </div>
      </div>
      <hr className='footer-hr-line' />
      <div className='footer-inner-con'>
        <div className='footerBottomSectionsCon'>
          {allSections.map(eachSection => {
            const sectionData = sectionsData.get(eachSection);
            return(
              <Button
                key={`${eachSection}_footer_button`}
                buttonClassName="footerSectionButton"
                name={eachSection}
                title={sectionData.title}
                buttonConClassName="footerSectionButtonCon"
              />
            )
          })}
        </div>
        <p className='footerLocationText'>{address}<LocationSvg /></p>
      </div>
    </div>
  )
}

export default Footer
