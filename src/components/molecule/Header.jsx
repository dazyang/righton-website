import React, { Component } from 'react'
// import { HashLink as Link } from 'react-router-hash-link'

class Header extends Component {
  render () {
    return (
      <header className='grid-12 grid-tl-12 grid-d-12 grid-m-12'>
        <div className='nav-options'>
          <a href='/'><h4>Home</h4></a>
        </div>
        <div className='nav-options'>
          <a href='#mission'><h4>Mission</h4></a>
        </div>
        <div className='nav-options'>
          <a href='#feature'><h4>Product</h4></a>
        </div>
        <div className='nav-options'>
            <a href='#team'><h4>Team</h4></a>
        </div>
      </header>
    )
  }
}

export default Header
