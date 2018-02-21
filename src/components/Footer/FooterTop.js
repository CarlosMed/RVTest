import React from 'react'
import footerLogo from '../../img/pool-pros-logo-footer.png'
import twitterIcon from '../../img/twitter-icon.png'
import facebookIcon from '../../img/facebook-icon.png'
import youtubeIcon from '../../img/youtube-icon.png'

const FooterTop = () => {
  return (
    <section className="footer-top">
      <img
        src={footerLogo}
        alt="Pool Pros Logo Footer"
        className="footer-logo"
      />
      <div className="social">
        <h2>Connect With Us</h2>
        <ul>
          <li>
            <img src={twitterIcon} alt="Twitter Icon" />
          </li>
          <li>
            <img src={facebookIcon} alt="Facebook Icon" />
          </li>
          <li>
            <img src={youtubeIcon} alt="Youtube Icon" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default FooterTop
