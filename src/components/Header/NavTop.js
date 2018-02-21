import React from 'react'
import actionIcon from '../../img/action-commercial-icon.png'

const NavTop = () => {
  return (
    <section className="nav-top">
      <p>Dealers and Distributers</p>
      <p>
        Commercial Services
        <span>
          <img src={actionIcon} alt="Commercial Icon" />
        </span>
      </p>
    </section>
  )
}

export default NavTop
