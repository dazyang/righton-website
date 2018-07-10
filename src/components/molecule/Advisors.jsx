import React from 'react'

import hash from '../../images/hash_icon.svg'
import AyNur from '../../images/profile_ay-nur.jpg'
import Michael from '../../images/profile_michael.jpg'

function Advisors() {
  return (
    <div className='card-wrapper advisor'>
      <h2><img src={hash} className='about-icons' alt='product feature' />Our Advisor</h2>
      <div className='col-wrapper'>
        <div className='single-profile'>
          <img src={AyNur} className='profile-photo' alt='Callan Stretton is a full-stack developer at RightOn! Education.' />
          <div>
            <h3>Ay-Nur Najm</h3>
            <h5>Harvard Graduate School of Education</h5>
          </div>
        </div>
        <div className='single-profile'>
          <img src={Michael} className='profile-photo' alt='Callan Stretton is a full-stack developer at RightOn! Education.' />
          <div>
            <h3>Michael Hwa</h3>
            <h5>Former Managing Director at Accenture</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advisors;