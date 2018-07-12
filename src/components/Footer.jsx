import React, { Component } from 'react'
import righton from '../righton.svg'

class Footer extends Component {
  render() {
    return (
      <footer>
        {/* <a href="mailto:sincwu@gmail.com"><button className='sign-up'>Subscribe to our newsletter</button></a> */}
          <p className='copyright-msg'>2018 RightOn Education &copy; All Rights Reserved</p>
        <div className='footer-icon'>
          <img src={righton} width='100%' alt='RightOn logo' />
        </div>
        <div className='footer-message'>
          <h3><b>Interested in learning more?</b><br/> Email us at <a href="mailto:info@rightoneducation.com" className='email-us'>info@rightoneducation.com</a></h3>
        </div>
      </footer>
    )
  }
}

export default Footer;