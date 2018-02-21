import React from 'react'
import commercialIcon from '../../img/action-commercial-icon.png'

const FooterBottom = () => {
  return (
    <section className="footer-bottom">
            <section className="sub-nav">
                <p>Dealers and Distributers</p>
                <p>Commercial Services
                    <span>
                        <img src={commercialIcon} alt="Commercial Icon" />
                    </span>
                </p>
            </section>
            <hr />
            <div className="copywrite">
                <p>&copy; 2017 Pool Pros</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
        </section>
  )
}

export default FooterBottom
