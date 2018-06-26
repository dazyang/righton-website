import React, { Component } from 'react'
import hash from '../images/hash_icon.svg'
import sinclair from '../images/profile_sinclair.jpeg'
import callan from '../images/profile_callan.png'
import daz from '../images/profile_daz.jpg'
import edward from '../images/profile_edward.jpg'
import kai from '../images/profile_kai.jpg'

class Team extends Component {
  render() {
    return (
      <section id='team' className='the-team'>
        <div className='section-intro'>
          <img src={hash} width='8%' alt='product feature' />
          <h2>Meet The Team</h2>
        </div>
        <div className='col-wrapper'>
          <div className='three-col-info-box'>
            <center><img src={callan} className='profile-photo' alt='Callan Stretton is a full-stack developer at RightOn! Education.' /></center>
            <h4 className='three-col-title'>Callan Stretton</h4>
            <h6>Full-Stack Developer</h6>
            <p className='feature-description'>
              <b>Favorite game show:</b>
              <br />
              The Chase
              <br /><br />
              <b>Favorite mistake:</b>
              <br /> 
              I make mistakes all the time when programming, and that’s great! I get to learn from my mistakes and understand why I should do things a different way. It’s the best way to learn, in my opinion.
            </p>
          </div>
          <div className='three-col-info-box'>
            <center>
              <img className='profile-photo' src={edward} alt='' />
            </center>
            <h4 className='three-col-title'>Edward Tan</h4>
            <h6>Tech Lead</h6>
            <p className='feature-description'>
              <b>Favorite game show:</b>
              <br />
              Who Wants to Be a Millionaire
              <br /><br />
              <b>Favorite mistake:</b>
              <br />
              When going to a shoes-off sushi restaurant, avoid holey socks, especially ones where your big toe might stick out.
            </p>
          </div>
          <div className='three-col-info-box'>
            <center>
                <img src={daz} width='80%' className='profile-photo' alt='Daz C. Yang is a UI Designer & Front-End Developer at RightOn! Education.' />
            </center>
            <h4 className='three-col-title'>Daz C. Yang</h4>
            <h6>UI Designer / Front-End Developer</h6>
            <p className='feature-description'>
              <b>Favorite game show:</b>
              <br />
              Kasou Taishou (A Japanese performance game show)
              <br /><br />
              <b>Favorite mistake:</b>
              <br /> 
              TBD
            </p>
          </div>
          <div className='three-col-info-box'>
            <center>
              <img className='profile-photo' src={kai} alt='' />
            </center>
            <h4 className='three-col-title'>Kai King</h4>
            <h6>Math Educator</h6>
            <p className='feature-description'>
              <b>Favorite game show:</b>
              <br />
              The Price is Right
              <br /><br />
              <b>Favorite mistake:</b>
              <br />
              When I get a parking ticket and happen to return in time to plead with the ticketing officer... They often tell me “everyone is usually so angry,” and because of my kindness, they rip it up!
            </p>
          </div>
          <div className='three-col-info-box'>
            <center>
                <img src={sinclair} className='profile-photo' alt='Sinclair Wu is the product lead at RightOn! Education.' />
            </center>
            <h4 className='three-col-title'>Sinclair Wu</h4>
            <h6>Product Lead</h6>
            <p className='feature-description'>
              <b>Favorite game show:</b>
              <br /> 
              Press Your Luck -- no whammies!
              <br /><br />
              <b>Favorite mistake:</b>
              <br /> 
              Didn’t like edamame (Japanese soybeans) the first time I had them at a restaurant in San Francisco, but then realized I was eating out of the discard pile...
            </p>
          </div>
        </div>  
      </section>
    )
  }
}

export default Team;