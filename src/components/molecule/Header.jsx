import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
        <header className='grid-12 grid-tl-12 grid-d-12 grid-m-12'>
          <div className='nav-options'>
            <a href='#/about'>
              <h4>About</h4>
            </a>
          </div>
          <div className='nav-options'>
            <a href='#features'>
              <h4>Product</h4>
            </a>
          </div>
          <div className='nav-options'>
            <a href=''>
              <h4>Contact</h4>
            </a>
          </div>
        </header>
    )
  }
}

export default Header;