import React from 'react'
import "./DscriptionBox.css"
function DscriptionBox() {
  return (
<div className='discriptionbox'>
    <div className="descriptionbox-navigator">
     <div className="descriptionbox-nav-box">Description</div>
     <div className="descriptionbox-nav-box fade">Reviews (122)</div>
    </div>

    <div className="descriptionbox-description">
      <p style={{fontSize:"17px",color:"gray"}}>
        An e-commerce website is an online platform that facilitates the buying
        and selling of products or services over the internet. It serves as a
        virtual marketplace where businesses and individuals can showcase their
        products, interact with customers, and conduct transactions without the
        need for a physical presence. E-commerce websites have gained immense
        popularity due to their convenience, accessibility, and the global reach
        they offer.
      </p>
    </div>
</div>
  )
}

export default DscriptionBox