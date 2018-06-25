import React, { Component } from 'react'
import x_icon from '../images/x_icon.svg';

class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="mailto:sincwu@gmail.com"><button className='sign-up'>Subscribe to our newsletter</button></a>
        <img src={x_icon} width='3%' alt='product feature' />
        <h2>Stay tuned!</h2>
      </footer>
    )
  }
}

export default Footer;