import React, { Component } from 'react'

import hash from '../images/hash_icon.svg'

class Team extends Component {
  render() {
    const {sinclair, daz, edward, kai} = this.props
    return (
      <section id='team' className='card-wrapper'>
        <div className='section-intro'>
          <h2><img src={hash} width='8%' className='about-icons' alt='product feature' />Meet the Team</h2>
        </div>
        <div className='col-wrapper'>
          <div className='three-col-info-box'>
            <center>
              <img src={daz} width='80%' className='profile-photo' alt='Daz C. Yang is a UI Designer & Front-End Developer at RightOn! Education.' />
              <h4 className='three-col-title'>Daz C. Yang</h4>
              <h6 className='job-title'>Full-Stack Web Developer</h6>
            </center>
            <p className='feature-description'>
              <b>Favorite game show:</b>
              <br />
              Kasou Taishou
              <br /><br />
              <b>Favorite mistake: </b>
              <br />
              I love learning new languages, and making mistakes with idioms is a key part of becoming more fluent. I find it funny that, when an alarm clock “goes off,” that means it turns on!
            </p>
          </div>
          <div className='three-col-info-box'>
            <center>
              <img className='profile-photo' src={edward} alt='' />
              <h4 className='three-col-title'>Edward Tan</h4>
              <h6 className='job-title'>Tech Lead</h6>
            </center>
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
              <img className='profile-photo' src={kai} alt='' />
              <h4 className='three-col-title'>Kai King</h4>
              <h6 className='job-title'>Math Educator</h6>
            </center>
            <p className='feature-description'>
              <b>Favorite game show:</b>
              <br />
              The Price is Right
              <br /><br />
              <b>Favorite mistake:</b>
              <br />
              When I get a parking ticket and happen to return in time to plead with the ticketing officer... They often tell me: “Everyone is usually so angry!” but because of my kindness, they rip it up!
            </p>
          </div>
          <div className='three-col-info-box'>
            <center>
              <img src={sinclair} className='profile-photo' alt='Sinclair Wu is the product lead at RightOn! Education.' />
              <h4 className='three-col-title'>Sinclair Wu</h4>
              <h6 className='job-title'>Product Lead</h6>
            </center>
            <p className='feature-description'>
              <b>Favorite game show:</b>
              <br />
              Press Your Luck
              <br /><br />
              <b>Favorite mistake:</b>
              <br />
              Didn’t like edamame the first time I had them at a Japanese restaurant, but then realized I was eating out of the discard pile...
            </p>
          </div>
        </div>  
      </section>
    )
  }
}

export default Team;