import React from 'react'
import headerLogo from '../../img/pool-pros-logo.png'
import locationIcon from '../../img/location-icon.png'
import hamburgerIcon from '../../img/menu-icon-mobile.png'
import nextArrow from '../../img/next-arrow.png'

const NavMain = () => {

  // Toggling for the Hamburger Menu
  function handleClick () {
    const links = document.querySelector('.links')

    links.style.display = (links.dataset.toggled ^= 1)
    ? 'block'
    : 'none'
  }

  // Button Close link handler
  function handleCloseBtn () {
    const links = document.querySelector('.links')
      links.style.display = 'none'
      links.dataset.toggled = 0;
  }

  return (
    <section className="nav-main">
      <div className="top-main">
        <img
          src={headerLogo}
          alt="Pool Pros Logo"
          className="logo"
        />
        <button>
          <img src={locationIcon} alt="Location Icon" /> Find a Pro
        </button>
        <img
          src={hamburgerIcon}
          alt="Menu Icon Mobile"
          className="hamburger"
          onClick={handleClick}
        />
      </div>
      <div className="links">
        <button className="close" onClick={handleCloseBtn}>&#10005;</button>
        <h4>Menu</h4>
        <ul>
          <li>
            Pools & Spas
            <img src={nextArrow} alt="Next Arrow Icon" />
          </li>
          <li>
            Supplies
            <img src={nextArrow} alt="Next Arrow Icon" />
          </li>
          <li>
            Resources
            <img src={nextArrow} alt="Next Arrow Icon" />
          </li>
          <li>
            Services
            <img src={nextArrow} alt="Next Arrow Icon" />
          </li>
        </ul>
        <button className="btn2">
          <img
            src={locationIcon}
            alt="Location Icon"
            className="locate"
          />
          Find a Pool Pro
        </button>
      </div>
    </section>
  )
}

export default NavMain
