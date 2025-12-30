import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import allproduct from "../Assest/Frontend_Assets/all_product"



function Popular() {

  const [popularProduct, setPopularProduct] = useState([]);

{/*  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setPopularProduct(data);
        } else {
          console.error("Backend did not return an array:", data);
          setPopularProduct([]); 
        }
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);  */}

  //creating endpoint for adding products in cartdata

  

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular_item">
        {allproduct.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
