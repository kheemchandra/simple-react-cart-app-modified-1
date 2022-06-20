import React, { Fragment, useContext } from "react";

import CartContext from "../../../store/cart-context";
import CartItem from "./CartItem"; 

import classes from "./CartList.module.css";

const DUMMY_MEALS = [
  {
    id: "i1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "i2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "i3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "i4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 16.5,
  },
];

const DUMMY_MEALS1 = [
  
];

const CartList = (props) => {
  const CartCtx = useContext(CartContext);
  const cart = CartCtx.cart; 
  let content = cart.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
    />
  ));

  return <Fragment>
    <ul className={classes['cart-list']}>
      {content}
    </ul>
    <div className={classes.process}>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cart.cost}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemoveCart} className={`${classes.button} ${classes['button--close']}`}>Close</button>
        <button className={`${classes.button} ${classes['button--order']}`}>Order</button>
      </div>
    </div>
  </Fragment>
};

export default CartList;
