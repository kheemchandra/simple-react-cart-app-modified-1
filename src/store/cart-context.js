import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItemHandler: (item) => {},
  removeItemHandler: (id) => {},
});

export default CartContext;
