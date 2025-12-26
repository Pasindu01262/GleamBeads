import React from 'react';
import "./Breadcrum.css";
import arrow_icon from "../Assest/Frontend_Assets/breadcrum_arrow.png";

function Breadcrum(props) {
  const { product, category } = props;

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> 
      SHOP <img src={arrow_icon} alt="" /> 
      {category} <img src={arrow_icon} alt="" /> 
      {product.name}
    </div>
  );
}

export default Breadcrum;
