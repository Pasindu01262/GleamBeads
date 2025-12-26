import React, { useContext } from 'react';
import "./ProductDisplay.css";
import star_icon from "../Assest/Frontend_Assets/star_icon.png";
import star_dull_icon from "../Assest/Frontend_Assets/star_dull_icon.png";
import { ShopContext } from '../../Contex/ShopContext';
import { useState } from 'react';


function ProductDisplay({ product }) {
  if (!product) return null;

  const {addToCart}=useContext(ShopContext);





  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    formData.append("access_key", "21ad52f7-b16b-4c0d-9a5e-03e24838d783");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult(alert("Successfully product send. Thank you!"));
      event.target.reset();
    } else {
      setResult(alert("Error"));
    }
  };





  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>

      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
              <div className='productdisplay-right-price-old'>${product.old_price}</div>
              <div className='productdisplay-right-price-new'> ${product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>
             A lightweight, handcrafted beaded bag designed with intricate patterns, perfect for adding elegance and style to any outfit.
        </div>
        {/*<div className='productdispaly-right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-right-size'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>*/}
        <div className='item-select-form'>
             <form onSubmit={onSubmit}>
                  
                  <br/>
                  <label className='item-details' htmlFor="item number" >Item Number:</label><br/>
                  <input className='text-box-item' type="number" name="product number" required/>
                  <br/><br/>

                  <label className='item-details' htmlFor="item name" >Item Name:</label><br/>
                  <input className='text-box-item' type="text" name="item name" required/>
                  <br/><br/>

                  <label className='item-details' htmlFor="Quantity" >Quantity:</label><br/>
                  <input className='text-box-item' type="number" name="Quantity" required/>
                  <br/><br/>

                  <label className='item-details' for="course">Select Item Size:</label><br/>
                      <select id="size" name="size">
                      <option value="">Choose an option</option>
                      <option value="s">S</option>
                      <option value="m">M</option>
                      <option value="l">L</option>
                      </select>
                      <br/><br/>

                  <label className='item-details' htmlFor="email" >Email:</label><br/>
                  <input className='text-box-item' type="email" name="email" />
                   <br/><br/>

                   <label className='item-details' htmlFor="contact number" >Contact Number:</label><br/>
                  <input className='text-box-item' type="Number" name="contact number" required/>
                  <br/><br/>

                  <label className='item-details' for="location">Google Maps Location:</label><br/>
                  <input className='text-box-item' type="text" name="map_link" placeholder="Paste Google Maps link here"/>
                  <br/><br/>

                 <label  className='item-details' htmlFor="msg" >Feedback:</label><br/>
                 <textarea className='msg-box' name="message" ></textarea>
                 <br/><br/>

                 <button  type="submit">Buy Now</button>

                 <span>{result}</span>
             </form>
        </div>
        {/*<p className='productdisplay-right-category'><span>Category:</span>Women , T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags:</span>Modern, Latest</p>*/}
      </div>
    </div>
  );
}

export default ProductDisplay;
