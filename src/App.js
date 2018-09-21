import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import './rwdgrid.css';

import LandingSection from './components/LandingSection'
import ProblemSection from './components/ProblemSection'
import ProductFeature from './components/ProductFeature'
import Mission from './components/molecule/Mission'
import WhyRightOn from './components/molecule/WhyRightOn'
import Team from './components/Team'
import Advisors from './components/molecule/Advisors'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className='container patterned-background'>
            <LandingSection />
            <Mission />
            <ProblemSection />           
            <WhyRightOn />
            <ProductFeature />
            <Team />
            <Advisors />
          </div>
            <Footer />
        </div>
    );
  }
}

export default App;