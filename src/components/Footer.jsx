import React, { Component } from 'react'
import x_icon from '../images/x_icon.svg';

class Footer extends Component {
  render() {
    return (
      <footer>
        {/* <a href="mailto:sincwu@gmail.com"><button className='sign-up'>Subscribe to our newsletter</button></a> */}
        <img src={x_icon} width='8%' alt='product feature' />
        <h1>Stay tuned!</h1>
      </footer>
    )
  }
}

export default Footer;