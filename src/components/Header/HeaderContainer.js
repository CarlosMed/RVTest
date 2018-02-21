import React, { Component } from 'react'
import NavMain from './NavMain'
import NavTop from './NavTop'

export class HeaderContainer extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavTop />
          <NavMain />
        </nav>
        <div alt="Water Image" className="header-img" />
      </div>
    )
  }
}

export default HeaderContainer
