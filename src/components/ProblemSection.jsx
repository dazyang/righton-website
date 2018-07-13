import React, { Component } from 'react'
import mathhomework from '../images/math-homework2.jpg'
import circle from '../images/circle_icon.svg';

class ProblemSection extends Component {
  render() {
    return (
      <section id='problem' className='problem'>
        <div className='section-intro'>
          <h2><img src={circle} width='8%' className='about-icons' alt='product feature' />
          The Problem</h2>
          <p className='problem-description'>Math, ugh! Many students feel that math is all about tests, grades, homework, and getting correct answers... What if we could flip things around and make math more about learning from mistakes and even having fun? Give <b><em>RightOn!</em></b> a try and find out how!</p>
        </div>
        <div className='one-col-box'>
          <img src={mathhomework} width='100%' alt="Math tests is boring!" />
        </div>
      </section>
    )
  }
}

export default ProblemSection;