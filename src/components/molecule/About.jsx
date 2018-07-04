import React, { Component } from 'react'
import righton from '../../righton.svg'

import Header from './Header'

class About extends Component {
  render() {
    return (
      <section id='about' className='about'>
        <Header />
        <div className="about-landing">
          <center><img src={righton} alt="logo" width='90%' /></center>
        </div>
        <div className='product-image'>
          <h1>About Us</h1>
        </div>
      </section>
    )
  }
}

export default About;