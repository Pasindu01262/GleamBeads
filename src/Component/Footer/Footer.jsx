import React from 'react'
import "./Footer.css"
import footer_logo from "../Assest/Frontend_Assets/logo_big.png"
import instagram_icon from "../Assest/Frontend_Assets/instagram_icon.png"
import pintedter_icon from "../Assest/Frontend_Assets/pintester_icon.png"
import whatsapp_icon from "../Assest/Frontend_Assets/whatsapp_icon.png"

function Footer() {
  return (
    <div className='footer'>
       <div className='footer-logo'>
        <img src={footer_logo} alt="footer_logo"/>
        <p>Gleam & Beads</p>
       </div>
         <ul className='footer-links'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
         <div className='footer-soctal-icon'>
            <div className='footer-icon-container'>
                <img src={instagram_icon} alt=""/>
            </div>

            <div className='footer-icon-container'>
                <a href="https://web.facebook.com/profile.php?id=61573076721453"><img src={pintedter_icon} alt=""/></a>
            </div>

            <div className='footer-icon-container'>
                <img src={whatsapp_icon} alt=""/>
            </div>
         </div>
         <div className='footer-copyright'>
            <hr/>
            {/*<p>Copyright @ 2023 - All Right Reserved</p>*/}
         </div>

    </div>
  )
}

export default Footer