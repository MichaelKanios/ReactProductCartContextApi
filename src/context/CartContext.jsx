import { createContext, useState, useContext } from "react";

const CartItems = createContext();

export const CartProvider = ({ children }) => {
  const [addtoCart, setAddtoCart] = useState([]);
  return (
    <CartItems.Provider value={{ addtoCart, setAddtoCart }}>
      {children}
    </CartItems.Provider>
  );
};

export const useCart = () => useContext(CartItems);
