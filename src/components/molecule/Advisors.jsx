import React from 'react'

import hash from '../../images/hash_icon.svg'
import AyNur from '../../images/profile_ay-nur.jpeg'
import Michael from '../../images/profile_michael.jpg'
import Ben from '../../images/profile_ben.png'

function Advisors() {
  return (
    <div className='card-wrapper advisor'>
      <h2><img src={hash} className='about-icons' alt='product feature' />Advisors</h2>
      <div className='col-wrapper'>
        <div className='single-profile'>
          <img src={AyNur} className='profile-photo-advisors' alt='' />
          <div>
          <h2 className='h2-light'>Ay-Nur Najm</h2>
          <h5>Math Instructional Coach</h5>
          </div>
          <div>
          <p>Ay-Nur is an independent math consultant and is currently pursuing studies in computer science. She was previously a math instructional coach and computer science teacher in Brooklyn, where she helped establish a charter school with Uncommon Schools. She has taught in NYC public and charter schools for a decade and is passionate about providing access to high quality instruction to all kids.</p>
          </div>
        </div>
        <div className='single-profile'>
          <img src={Ben} className='profile-photo-advisors' alt='' />
          <div>
            <h2 className='h2-light'>Ben Woodford</h2>
            <h5>Math Education Researcher</h5>
          </div>
          <div>
            <p>Ben is a doctoral scholar at Stanford University studying mathematics education. Before transitioning to research, he was a high school math teacher and a project-based learning facilitator. He has developed innovative curricula and is knowledgeable about best practices for learning in and out of the classroom.</p>
          </div>
        </div>
        <div className='single-profile'>
          <img src={Michael} className='profile-photo-advisors' alt='' />
          <div>
            <h2 className='h2-light'>Michael Hwa</h2>
            <h5>Managing Director, Accenture</h5>
          </div>
          <div>
            <p>Michael is a Managing Director at Accenture, focused on the high-tech industry. As a father of two young children, he is passionate about parenting and the importance of education. In his spare time, Michael enjoys building Lego structures with his kids and doing home improvement projects of all kinds.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advisors;