import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assest/Frontend_Assets/star_icon.png";
import star_dull_icon from "../Assest/Frontend_Assets/star_dull_icon.png";
import { ShopContext } from "../../Contex/ShopContext";

function ProductDisplay({ product }) {
  if (!product) return null;

  const { addToCart } = useContext(ShopContext);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "21ad52f7-b16b-4c0d-9a5e-03e24838d783");
    formData.append("product_id", product.id);
    formData.append("product_name", product.name);
    formData.append("product_price", product.new_price);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Order submitted successfully!");
        event.target.reset();
      } else {
        setResult("Form submission failed.");
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong.");
    }
  };

  return (
    <div className="productdisplay">
      {/* LEFT SIDE */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>

        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-star">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <p className="productdisplay-right-description">
          A lightweight, handcrafted beaded bag designed with intricate patterns.
        </p>

        {/* ORDER FORM */}
        <div className="item-select-form">
          <form onSubmit={onSubmit}>
            <input type="number" name="quantity" placeholder="Quantity" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="text"
              name="map_link"
              placeholder="Google Maps link"
            />
            <textarea name="message" placeholder="Feedback"></textarea>

            <button type="submit">Buy Now</button>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;



