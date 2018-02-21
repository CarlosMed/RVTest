import React, { Component } from 'react'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

export class FooterContainer extends Component {
  render() {
    return (
      <div>
        <FooterTop />
        <FooterBottom />
      </div>
    )
  }
}

export default FooterContainer
