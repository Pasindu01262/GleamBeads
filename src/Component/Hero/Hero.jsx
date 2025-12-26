import React from 'react'
import "./Hero.css"
import hand_icon from "../Assest/Frontend_Assets/hand_icon.png"
import arrow_icon from "../Assest/Frontend_Assets/arrow.png"
import hero_image from "../Assest/Frontend_Assets/hero-image.png"
function Hero() {
  return (
    <div className='Hero'>
       <div className='hero-left'>
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
           <div className='hero-hand-icon'>
             <p>new Bags</p>
             <img src={hand_icon} alt="hand-icon"/>
            </div> 
            <p> collection</p>
            <p>for Women</p>
        </div>
        <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow_icon"/>
          
        </div>
       </div>
       <div className='hero-right'>
         <img src={hero_image} alt="hero_image"/>
       </div>
    </div>
  )
}

export default Hero