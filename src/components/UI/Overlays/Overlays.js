import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";
import CartList from "../../Cart/CartItems/CartList";
import Checkout from "../../Checkout/Checkout";
import classes from "./Overlays.module.css"; 

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Card className={props.className}>
      <CartList onCheckout={props.onCheckout} onClose={props.onClose} hasCheckedOut={props.hasCheckedOut}/>
    </Card>
  );
};

let portalEl = document.getElementById("overlays");

const Overlays = (props) => {
  const [hasCheckedOut, setHasCheckedOut] = useState(false);
  const [hasOrdered, setHasOrdered] = useState(false);

  const checkoutHandler = () => {
    setHasCheckedOut(true);
  };

  const cancelCheckoutHandler = () => {
    setHasCheckedOut(false);
  };

  const orderHandler = () => {

    setHasOrdered(true);
  };

  return (
    ReactDOM.createPortal(
      <Fragment >
        <Backdrop onClick={props.onRemoveCart} > 
        {(!hasCheckedOut && !hasOrdered) && <Modal className={classes['modal']} onCheckout={checkoutHandler} onClose={props.onRemoveCart} />}
        {(hasCheckedOut && !hasOrdered) && <Modal className={`${classes['modal']} ${classes['modal--']}`} onCheckout={checkoutHandler} onClose={props.onRemoveCart} hasCheckedOut={hasCheckedOut}/>}
        {(hasCheckedOut || hasOrdered) && <Checkout onCancelCheckout={cancelCheckoutHandler} onClose={props.onRemoveCart} onOrdered={orderHandler}/>} 
        </Backdrop>
      </Fragment>, portalEl)
  );
};

export default Overlays;
