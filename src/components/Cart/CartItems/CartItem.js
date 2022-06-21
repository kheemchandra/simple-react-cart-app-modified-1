import React from "react";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div className={classes.about}>
        <h1>{props.name}</h1>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price.toFixed(2)}</span>
          <span className={classes.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onDecrease}>&#8211;</button>
        <button onClick={props.onIncrease}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
