import React, { Component } from 'react'
import Card from '@material-ui/core/Card'

import About from './molecule/About'
import Mission from './molecule/Mission'
import WhyRightOn from './molecule/WhyRightOn'
import AboutTeam from './molecule/AboutTeam'
import Advisors from './molecule/Advisors'

class AboutUs extends Component {
  render() {
    return (
      <div className='patterned-background'>
        <About />
        <Mission />
        <WhyRightOn />
        <AboutTeam />
        <Advisors />
      </div>
    )
  }
}

export default AboutUs;