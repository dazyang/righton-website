import React from 'react'
import righton from '../../righton.svg'

import Header from './Header'

function About () {
    return (
      <section id='about' className='about'>
        <Header />
        <div className="about-landing">
         <a href='/'><img src={righton} alt="logo" width='100%' /></a>
        </div>
        <div className='about-blurb'>
          <center>
            <h1>About Us</h1>
            {/* <h3>Write a blurb about us</h3> */}
          </center>
        </div>
      </section>
    )
}

export default About;