import React from 'react'

import diversity from '../../images/diversity-placeholder-image.jpg'
import plus from '../../images/plus_icon.svg';

function Mission () {
    return (
      <section>
        <img src={diversity} alt="CHANGE IMAGE" width='70%' />
        <div className='card-wrapper mission-card'>
          <h2><img src={plus} className='about-icons' alt='product feature' />Mission</h2>
          <h3>Our mission is to make math more fun for middle and high school students, increasing both motivation and self-confidence. Not a big fan of math? Great, <b><em>RightOn!</em></b> is the game for you. Already like math? That’s cool too, you’ll like it even more!</h3>
        </div>
      </section>
    )
}

export default Mission;