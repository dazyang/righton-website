import React, { Component } from 'react'
import righton from '../righton.svg'

class Footer extends Component {
  render() {
    return (
      <footer id='footer'>
        <div className='footer'>
          <p className='copyright-msg'>RightOn Education &copy; 2018 All Rights Reserved
          </p>
          <div className='footer-logo'>
            <img src={righton} width='100%' alt='RightOn logo' />
          </div>
          <div className='footer-msg'>
            <h3><b>Interested in learning more?</b><br/> Email us at <a href="mailto:info@rightoneducation.com" className='email-us'>info@rightoneducation.com</a></h3>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;