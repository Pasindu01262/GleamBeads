import React, { useRef, useState } from 'react'
import "./Navbar.css"
import card_icon from "../Assest/Frontend_Assets/cart_icon.png"
import logo from "../Assest/Frontend_Assets/logo.png"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Contex/ShopContext';
import nav_dropdowm from "../Assest/Frontend_Assets/nav_dropdown.png"

function Navbar() {
    const [menu,setmenu]=useState("Shop");
    const {getTotalCartItem}=useContext(ShopContext);
    const menuRef=useRef();

    const dropdown_toggle=(e)=>{
         menuRef.current.classList.toggle('nav-menu-visible');
         e.target.classList.toggle("open"); 
    }
  return (
    <div className='navbar'>
      <div className='nav-logo'>
          <img src={logo} alt="logo"/>
          <p>Gleam & Beads</p>
      </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdowm} alt='nav_dropdowm'/>
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setmenu("Shop")}}>< Link to="/" style={{textDecoration:"none"}}>Home</ Link>{menu==="Shop"? <hr/>: <></>}</li>
            {/*<li onClick={()=>{setmenu("Mens")}}>< Link to="/mens" style={{textDecoration:"none"}}>Men</ Link>{menu==="Mens"?<hr/>:<></>}</li>*/}
            <li onClick={()=>{setmenu("WoMens")}}><Link to="/womens" style={{textDecoration:"none"}}>Women-Bag</Link>{menu==="WoMens"?<hr/>:<></>}</li>
           {/* <li onClick={()=>{setmenu("Kids")}}><Link to="/kids" style={{textDecoration:"none"}}>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li> */}
           <li onClick={()=>{setmenu("Contact")}}>< Link to="/Contact" style={{textDecoration:"none"}}>Contact</ Link>{menu==="Contact"? <hr/>: <></>}</li>
        </ul>
        <div className='nav-login-cart'>
         {/* {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
          <Link to="/login"><button>Login</button></Link>}*/}
           
          {/* <Link to="/cart"><img src={card_icon } alt="card_icon "/></Link>
           <div className='nav-cart-count'>{getTotalCartItem()}</div>*/}
            
        </div>
    </div>
  )
}

export default Navbar