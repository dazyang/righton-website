import React from 'react'

import diversity from '../../images/diversity-placeholder-image.jpg'
import circle from '../../images/circle_icon.svg';


function Mission () {
    return (
      <section className='mission-section' id='mission'>
        <div className='mission-image'>
          <img src={diversity} alt="CHANGE IMAGE" width='90%' />
        </div>
        <div className='mission-card'>
          <h2><img src={circle} className='about-icons' alt='mission' />Mission</h2>
          <h3>Our mission is to make math more fun for middle and high school students, increasing both motivation and self-confidence. Not a big fan of math? Great, <b><em>RightOn!</em></b> is the game for you. Already like math? That’s cool too, you’ll like it even more!</h3>
        </div>
      </section>
    )
}

export default Mission;