import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let i = 0; i <= 300; i++) cart[i] = 0;
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:4000/allproduct")
      .then(res => res.json())
      .then(data => setAll_product(data))
      .catch(err => console.error("Failed to fetch products:", err));

      if(localStorage.getItem('auth-token'))
      {
        fetch('http://localhost:4000/getcart',{
          method:'POST',
          headers:{
            Accept:'application/from-data',
            'auth-token':`${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json',
          },
          body:"",
        }).then((Response)=>Response.json())
        .then((data)=>setCartItems(data));
      }
  }, []);

  // ADD TO CART
  const addToCart = (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));

    const token = localStorage.getItem("auth-token");
    if (token) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ itemId }),
      })
        .then(res => res.json())
        .then(data => console.log("Cart updated:", data))
        .catch(err => console.error(err));
    }
  };

  // REMOVE FROM CART
  const removeFromCart = (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
    if(localStorage.getItem('auth-token'))
    {
        fetch("http://localhost:4000/removeFromCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ itemId }),
      })
        .then(res => res.json())
        .then(data => console.log("Cart updated:", data))
        .catch(err => console.error(err));
    }
  };

  // TOTAL AMOUNT
  const getTotalCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      if (cartItems[id] > 0) {
        const product = all_product.find(p => p.id === Number(id));
        if (product) total += product.new_price * cartItems[id];
      }
    }
    return total;
  };

  // TOTAL ITEMS
  const getTotalCartItem = () => {
    let total = 0;
    for (const id in cartItems) {
      total += cartItems[id];
    }
    return total;
  };

  return (
    <ShopContext.Provider
      value={{
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItem,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;


