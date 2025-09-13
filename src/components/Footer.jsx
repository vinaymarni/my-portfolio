import React from 'react'
import { myDetails } from '../assets/data'
import "../styles/footer.css"

function Footer() {
  const mobile = myDetails.get("mobile");
  const email = myDetails.get("email");
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

          </div>
        </div>
      </div>
      <hr className='footer-hr-line' />
      <div className='footer-inner-con'>

      </div>
    </div>
  )
}

export default Footer
