import React from 'react'
import CertList from './CertList'

import mobilePhoneIcon from '../../img/phone-icon-mobile.png'
import desktopPhoneIcon from '../../img/phone-icon-desktop.png'
import emailIcon from '../../img/email-icon.png'

const DealerContainer = props => {
  const { name, phone1, certifications } = props.dealer.data

  function handleClick(e) {
    const modal = document.querySelector('.modal')

    // Toggling Modal
    modal.style.display = (modal.dataset.toggled ^= 1) ? 'flex' : 'none'

    // Pass the prop up to the parent container
    props.onButtonClick(name)
  }

  return (
    <div className="dealer">
      <h2>{name}</h2>
      <hr />
      <button className="call-mobile">
        <img src={mobilePhoneIcon} alt="Phone Icon Mobile" />
        <span className="tap">Tap to call</span> {phone1}
      </button>
      <button className="call-desk">
        <img src={desktopPhoneIcon} alt="Phone Icon Mobile" />
        {phone1}
      </button>
      <i>Can’t talk now? Click below to send an email.</i>
      <button className="email" onClick={handleClick}>
        <img src={emailIcon} alt="Email Icon" /> Contact this Pro
      </button>
      <div className="business-info">
        <div className="hours">
          <h4>Business Hours</h4>
          <ul>
            <li>Weekdays 7:00am - 7:00pm</li>
            <li>Saturdays 7:00am - 3:00pm</li>
            <li>Sundays - CLOSED</li>
          </ul>
        </div>
        <div className="certifications">
          <ul>
            {certifications.map((certs, i) => <CertList key={i} certinfo={certs} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DealerContainer
