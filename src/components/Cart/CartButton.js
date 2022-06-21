import React, { useState, useContext, useEffect, useRef } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "./CartIcon";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const [cls, setCls] = useState(classes["button"]);
  const CartCtx = useContext(CartContext);
  const firstTime = useRef(true);

  useEffect(() => {
    let timer = null;
    if (firstTime.current) {
      firstTime.current = false; 
    } else { 
      setCls(`${classes["button"]} ${classes["bump"]}`);
      timer = setInterval(() => {
        setCls(classes["button"]);
      }, 350);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [CartCtx.cart.cost]);

  let totalAmount = CartCtx.cart.items.reduce(
    (prevNum, item) => prevNum + item.amount,
    0
  );

  return (
    <button onClick={props.onClick} className={cls}>
      <span className={classes["cart-icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.total}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
