import React, { Component } from 'react';
import 'sanitize.css'
import './scss/main.css'

import HeaderContainer from './components/Header/HeaderContainer'
import MainContainer from './components/Main/MainContainer'
import FooterContainer from './components/Footer/FooterContainer'



class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <MainContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
