import React, { Component } from 'react'
import Card from '@material-ui/core/Card'

import diversity from '../images/diversity-placeholder-image.jpg'
import unsplash_1 from '../images/unsplash-1.jpg'
import unsplash_2 from '../images/unsplash-2.jpg'
import circle from '../images/circle_icon.svg';

import About from './molecule/About'
import Team from './Team'

class AboutUs extends Component {
  render() {
    return (
      <div>
        <About />
        <center><img src={diversity} alt="CHANGE IMAGE" width='65%' /></center>
        <div className='card-wrapper mission-card'>
          <h2><img src={circle} className='about-icons' alt='product feature' />Mission</h2>
            <h3>Our mission is to make math more fun for middle and high school students, increasing both motivation and self-confidence. Not a big fan of math? Great, <em>RightOn!</em> is the game for you. Already like math? That’s cool too, you’ll like it even more!</h3>
        </div>
        {/* <WhyRightOn /> */}
        <div className='card-wrapper-normal'>
          
            <h2><img src={circle} className='about-icons' alt='product feature' />Why <em>RightOn!</em></h2>
            <h3><em>RightOn!</em> is a free game show app that makes math more fun for middle and high school students.</h3>
            <div className='why-righton-wrapper'>
              <div className='temp'>
                <img src={unsplash_1} alt="CHANGE IMAGE" width='100%' />
              </div>
              <div className='why-righton-list'>
              <h3><b>Increasing educational equity in STEM</b></h3>
              The same high-quality, fun version of <em>RightOn!</em> is available for all students – no matter your school, zip code, or how much you even like math.
              </div>
            </div>
            <div className='why-righton-wrapper'>
              <div className='temp'>
                <img src={unsplash_2} alt="CHANGE IMAGE" width='100%' />
              </div>
              <div className='why-righton-list'>
                <h3><b>Fostering mathematical mindsets</b></h3>
                Everyone can get better at math, especially when you try. We focus on wrong answers rather than right ones, so anyone who has ever come up with a wrong answer can play this game!
              </div>
            </div>
            <div className='why-righton-wrapper'>
              <div className='temp'>
                <img src={diversity} alt="CHANGE IMAGE" width='100%' />
              </div>
              <div className='why-righton-list'>
                <h3><b>Having fun with math</b></h3>
                <em>RightOn!</em> is not just any game, it’s a game show where you can play in teams and win prizes – real ones!
              </div>
            </div>
          
        </div>
        {/* <AboutTeam /> */}
        <Team />
        {/* <AboutAdvisors /> */}
        {/* <div className='card-wrapper'>
          <h2>Our Advisors</h2>
        </div> */}
      </div>
    )
  }
}

export default AboutUs;

{/* <div className='card-wrapper'>
  <h2>Our Team</h2>
  <div className='profile-card'>
    <div className='profile-photo'>
      
    </div>
    <div className='profile-info'>
    
    </div>
    <div className='profile-description'>
    
    </div>
  </div>
</div> */}