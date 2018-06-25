import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
        <header className='grid-12 grid-tl-12 grid-d-12 grid-m-12'>
          <div className='nav-options'>
            <a href='#team'>
              <h5>About</h5>
            </a>
          </div>
          <div className='nav-options'>
            <a href='#features'>
              <h5>Product</h5>
            </a>
          </div>
          <div className='nav-options'>
            <a href=''>
              <h5>Contact</h5>
            </a>
          </div>
        </header>
    )
  }
}

export default Header;