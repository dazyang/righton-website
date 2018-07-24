import React from 'react'

import xicon from '../../images/magenta_straight_X_icon.svg'
import AyNur from '../../images/profile_ay-nur.jpeg'
import Michael from '../../images/profile_michael.jpg'
import Ben from '../../images/profile_ben.png'

function Advisors() {
  return (
    <div className='card-wrapper advisor'>
      <h2><img src={xicon} className='about-icons' alt='product feature' />Advisors</h2>
      <div className='col-wrapper'>
        <div className='single-profile'>
          <img src={AyNur} className='profile-photo-advisors' alt='Callan Stretton is a full-stack developer at RightOn! Education.' />
          <center>
            <h2 className='h2-light'>Ay-Nur Najm</h2>
            <h5>Math Instructional Coach</h5>
          </center>
        </div>
        <div className='single-profile'>
          <img src={Michael} className='profile-photo-advisors' alt='Callan Stretton is a full-stack developer at RightOn! Education.' />
          <center>
            <h2 className='h2-light'>Michael Hwa</h2>
            <h5>Managing Director at Accenture</h5>
          </center>
        </div>
        <div className='single-profile'>
          <img src={Ben} className='profile-photo-advisors' alt='Callan Stretton is a full-stack developer at RightOn! Education.' />
          <center>
            <h2 className='h2-light'>Ben Woodford</h2>
            <h5>Math Education Researcher</h5>
          </center>
        </div>
      </div>
    </div>
  )
}

export default Advisors;