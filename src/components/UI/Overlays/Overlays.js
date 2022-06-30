import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";
import CartList from "../../Cart/CartItems/CartList";
import Checkout from "../../Checkout/Checkout";
import classes from "./Overlays.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <CartList onOrder={props.onOrder} onRemoveCart={props.onRemoveCart} />
    </Card>
  );
};

let portalEl = document.getElementById("overlays");

const Overlays = (props) => {
  const [hasOrdered, setHasOrdered] = useState(false);

  const orderHandler = () => {
    setHasOrdered(true);
  };

  const cancelOrderHandler = () => {
    setHasOrdered(false);
  };

  return (
    ReactDOM.createPortal(
      <Fragment >
        <Backdrop onClick={props.onRemoveCart} />
        {!hasOrdered && <Modal onOrder={orderHandler} onRemoveCart={props.onRemoveCart} />}
        {hasOrdered && <Checkout onCancelOrder={cancelOrderHandler} />}
      </Fragment>, portalEl)
  );
};

export default Overlays;
