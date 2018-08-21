import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

class Header extends Component {
  render () {
    return (
      <header className='grid-12 grid-tl-12 grid-d-12 grid-m-12'>
        <div className='nav-options'>
          <Link to='/about'><h4>About</h4></Link>
        </div>
        <div className='nav-options'>
          <Link to='/#features'>
            <h4>Product</h4>
          </Link>
        </div>
        <div className='nav-options'>
          <Link to='/#footer'>
            <h4>Contact</h4>
          </Link>
        </div>
      </header>
    )
  }
}

export default Header
