import React from 'react'

import starIcon from '../../img/star-installation-pro.png'
import usersIcon from '../../img/users-commercial-pro.png'
import homeIcon from '../../img/home-residential-pro.png'
import gearIcon from '../../img/gear-service-pro.png'

const CertList = props => {

  function certCheck () {
    let certInfos = [
      {
        icon: starIcon,
        alt: 'Star Installation Pro',
        name: 'Installation Pro'
      },
      {
        icon: homeIcon,
        alt: 'Home Residential Pro',
        name: 'Residential Pro'
      },
      {
        icon: usersIcon,
        alt: 'Commercial Pro Icon',
        name: 'Commercial Pro'
      },
      {
        icon: gearIcon,
        alt: 'Service Pro',
        name: 'Service Pro'
      }
    ]
    let result = certInfos.filter(cert => (cert.name === props.certinfo) && cert
    )
    let singleCert = result[0]


    return (
      <li>
        <img src={singleCert.icon} alt={singleCert.alt}/>
        {singleCert.name}
      </li>
    )
  }


  return (
    <div>
      {certCheck()}
    </div>
  )
}
export default CertList
