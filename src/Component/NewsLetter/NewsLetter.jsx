import React from 'react'
import "./NewsLetter.css"

function NewsLetter() {
  return (
    <div className='newsletter'> 
       <h1>Get Exclusive Ofeers On your Updated</h1>
       <p>Subscribe to our newletter and stay updated</p>
       <div>
           <input type='email' placeholder='your Email id'/>
           <button>Subscribe</button>
       </div>
    </div>
  )
}

export default NewsLetter