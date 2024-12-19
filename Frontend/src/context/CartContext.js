import React, { createContext, useState } from "react";

// Create the Cart Context
const CartContext = createContext();

// Create the Cart Provider component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Provide state and actions to children
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Export both the context and the provider
export { CartContext, CartProvider };
