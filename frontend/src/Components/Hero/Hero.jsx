import React from 'react'
import './Hero.css'
import { assets } from '../../assets/assets'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src={assets.hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>latest collection</div>
          <img src={assets.arrow} alt="" />

        </div>



      </div>
      <div className="hero-right">
        <img src={assets.hero_image} alt="" />

      </div>
      
    </div>
    
  )
}

export default Hero
