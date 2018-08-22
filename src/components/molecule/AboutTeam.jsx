import React from 'react'

import xicon from '../../images/magenta_straight_X_icon.svg'
import sinclair from '../../images/profile_sinclair.jpg'
import callan from '../../images/profile_callan.png'
import daz from '../../images/profile_daz.jpg'
import edward from '../../images/profile_edward.jpg'
import kai from '../../images/profile_kai.jpg'

function AboutTeam (){
    return (
      <div className='card-wrapper'>
        <h2><img src={xicon} className='about-icons' alt='product feature' />Team</h2>
        <div className='col-wrapper'>
          <center>
            <img src={sinclair} className='profile-photo' alt='Sinclair Wu is the product lead at RightOn! Education.' />
            <h4>Sinclair Wu</h4>
            <h6 className='job-title'>Product Lead</h6>
          </center>
          <center>
            <img src={daz} width='80%' className='profile-photo' alt='Daz C. Yang is a UI Designer & Front-End Developer at RightOn Education.' />
            <h4>Daz C. Yang</h4>
            <h6 className='job-title'>UI Designer / Front-End Developer</h6>
          </center>
          <center>
            <img src={callan} className='profile-photo' alt='Callan Stretton is a full-stack developer at RightOn! Education.' />
            <h4 >Callan Stretton</h4>
            <h6 className='job-title'>Full-Stack Developer</h6>
          </center>
          <center>
            <img className='profile-photo' src={edward} alt='' />
            <h4>Edward Tan</h4>
            <h6 className='job-title'>Tech Lead</h6>
          </center>
          <center>
            <img className='profile-photo' src={kai} alt='' />
            <h4>Kai King</h4>
            <h6 className='job-title'>Math Educator</h6>
          </center>
        </div>
      </div>
    )
  }

export default AboutTeam;