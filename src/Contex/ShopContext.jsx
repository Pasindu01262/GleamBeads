import React, { createContext, useState } from "react";
import all_product from "../Component/Assest/Frontend_Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  all_product.forEach((item) => {
    cart[item.id] = 0;
  });
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());


  useEffect(() => {
    fetch("https://ecommerce-backend-eight-sage-86.vercel.app/allproduct")
      .then((res) => res.json())
      .then((data) => setAll_product(data))
      .catch((err) => console.error("Failed to fetch products:", err));

    const token = localStorage.getItem("auth-token");
    if (token) {
      fetch("https://ecommerce-backend-eight-sage-86.vercel.app/getcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })
        .then((res) => res.json())
        .then((data) => setCartItems(data));
    }
  }, []);

  // ADD TO CART

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));


    const token = localStorage.getItem("auth-token");
    if (token) {
      fetch("https://ecommerce-backend-eight-sage-86.vercel.app/addtocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log("Cart updated:", data))
        .catch((err) => console.error(err));
    }

  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));


    const token = localStorage.getItem("auth-token"); // FIXED: define token
    if (token) {
      fetch("https://ecommerce-backend-eight-sage-86.vercel.app/removeFromCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log("Cart updated:", data))
        .catch((err) => console.error(err));
    }

  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      if (cartItems[id] > 0) {
        const product = all_product.find((p) => p.id === Number(id));

        if (product) {
          total += product.new_price * cartItems[id];
        }

        if (product) total += product.new_price * cartItems[id];

      }
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
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;



