import React from "react";

const CartContext = React.createContext({
  cart: [],
  totalAmount: 0,
  addItem: (func, item) => {},
  removeItem: (func, id) => {},
});

export default CartContext;
