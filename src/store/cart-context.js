import React from "react";

const CartContext = React.createContext({
  cart: [], 
  addItem: (func, item) => {},
  removeItem: (func, id) => {},
  resetCart: (func) => {}
});

export default CartContext;
