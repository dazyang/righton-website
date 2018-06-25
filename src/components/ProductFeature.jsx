import React, { Component } from 'react'
import x_icon from '../images/x_icon.svg';
import progress from '../images/progress_icon.svg';
import gift from '../images/gift.svg';

class ProductFeature extends Component {
  render() {
    return (
      <section id='features' className='product-features'>
        <div className='section-intro'>
          <img src={x_icon} width='8%' alt='product feature' />
          <h2>Product Features</h2>
        </div>
        <div className='col-wrapper grid-d-7'>
          <div className='three-col-info-box'>
            <div className='feature-images'>
              <center><img src={x_icon} width='70%' className="App-logo" alt="win-with-mistake" /></center>
            </div>
            <h4>Have Fun With Wrong Answer</h4>
            <p className='feature-description'>Yep, that’s right! We show you one or more ways to come up with the right answer to an everyday math problem. Your goal: to come up with a wrong answer, maybe one that you thought was right!
                  </p>
          </div>
          <div className='three-col-info-box'>
            <div className='feature-images'>
              <center><img src={gift} width='80%' className="App-logo" alt="Tracking your progress" /></center>
            </div>
            <h4>Win Prizes</h4>
            <p className='feature-description'>Win cool stuff for not only yourself, but also your school and community. When you win, you get to choose!
                  </p>
          </div>
          <div className='three-col-info-box'>
            <div className='feature-images'>
              <center><img src={progress} width='80%' className="App-logo" alt="Tracking your progress" /></center>
            </div>
            <h4>Track Individual Progress</h4>
            <p className='feature-description'>We’ll help you keep track of what questions you’re good at, and which ones you may want to brush up on. See your own improvement over time!
                </p>
          </div>
        </div>
      </section>
    )
  }
}

export default ProductFeature;