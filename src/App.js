import React, { Component } from 'react';
// import plus from './images/plus_icon.svg';

import './App.css';
import './rwdgrid.css';

import LandingSection from './components/LandingSection'
import ProblemSection from './components/ProblemSection'
import ProductFeature from './components/ProductFeature'
import Team from './components/Team'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <LandingSection />
          <ProblemSection />
          <ProductFeature />
          <Team/>
        </div>
          <Footer />
      </div>
    );
  }
}

export default App;