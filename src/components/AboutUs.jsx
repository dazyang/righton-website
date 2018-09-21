import React, { Component } from 'react'

import Mission from './molecule/Mission'
import WhyRightOn from './molecule/WhyRightOn'
import Advisors from './molecule/Advisors'

class AboutUs extends Component {
  render() {
    return (
      <div className='patterned-background'>
        <Mission />
        <WhyRightOn />
        <Advisors />
      </div>
    )
  }
}

export default AboutUs;