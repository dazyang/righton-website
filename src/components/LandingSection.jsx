import React, { Component } from 'react'
import righton from '../righton.svg'
import iphonemockup from '../images/app-iphone-mockup.png'

import Header from './molecule/Header'

class LandingSection extends Component {
  render() {
    return (
      <section id='landing' className='landing'>
        <Header />
        <div className="logo-branding">
          <center><img src={righton} alt="logo" width='90%' /></center>
          <div className='product-msg'>
            <h3>Fun and motivation first – A math game show app for students to learn from and win — even with wrong answers!</h3>
          </div>
        </div>
        <div className='product-image'>
          <img src={iphonemockup} width='100%' alt='RightOn! – A fun math game show app for high school students!' />
        </div>
      </section>
    )
  }
}
  
export default LandingSection;