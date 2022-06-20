import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";
import CartList from "../../Cart/CartItems/CartList";

import classes from "./Overlays.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <CartList />
    </Card>
  );
};

let portalEl = document.getElementById("overlays");

const Overlays = (props) => {
  return (
    ReactDOM.createPortal(
      <Fragment >
        <Backdrop />
        <Modal />
      </Fragment>, portalEl)
  );
};

export default Overlays;
