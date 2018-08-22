import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import './rwdgrid.css';

import AboutUs from './components/AboutUs'
import LandingSection from './components/LandingSection'
import ProblemSection from './components/ProblemSection'
import ProductFeature from './components/ProductFeature'
import Team from './components/Team'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Route exact path='/' component={LandingSection} />
            <Route exact path='/' component={ProblemSection} />
            <Route exact path='/' component={ProductFeature} />
            <Route exact path='/' component={Team} />
            <Route exact path='/about' component={AboutUs} />
          </div>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;