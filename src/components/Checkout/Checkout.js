import React, { useState, useEffect, useContext } from "react";
import { Spinner } from "spin.js";

import { useHttp } from "../../hooks/use-http";
import CartContext from "../../store/cart-context";
import CheckoutForm from "./CheckoutForm";


import classes from "./Checkout.module.css";

let target = document.getElementById("spinner");
let spinner = new Spinner().spin();

const Checkout = (props) => {
  const [didSubmitted, setDidSubmitted] = useState(false); 
  const { isLoading, error, sendRequests: checkout } = useHttp();
  const CartCtx = useContext(CartContext);

  const callback = (applyData) => {
    console.log("Order is successfully placed.");
    setDidSubmitted(true);
    CartCtx.resetCart();
  };

  const submitDataHandler = (userData) => {
    props.onOrdered();
    checkout(
      {
        URL: "https://food-order-894c5-default-rtdb.firebaseio.com/orders.json",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { user: {...userData}, orderItems: CartCtx.cart.items},
      },
      callback
    );
  }; 

  useEffect(() => {
    if (isLoading) {
      target.style.display = "block";
      spinner.spin();
      target.appendChild(spinner.el);
    } else {
      target.style.display = "none";
      spinner.stop();
    }
  }, [isLoading]);

  const message = didSubmitted || error;

  return (
    <div onClick={(event) => {event.stopPropagation()}}>
      {!message && <CheckoutForm onCancelCheckout={props.onCancelCheckout} onSubmit={submitDataHandler}/>}
      {message && (
        <div className={`${classes.message} ${error ? classes.failure : classes.success}`}>
          {error && (
            <p>Failed to placed order.  Please try again.</p>
          )}
          {didSubmitted && (
            <p>Order successfully placed!!!</p>
          )}
          <button onClick={props.onClose} className={`${classes.button} ${error ? classes['btn-failure'] : classes['btn-success']}`}>Close</button>
        </div>
      )}
    </div>
  );

};

export default Checkout;
