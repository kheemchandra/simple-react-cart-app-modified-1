import React, { Fragment, useContext } from "react";

import CartContext from "../../../store/cart-context";
import CartItem from "./CartItem"; 

import classes from "./CartList.module.css";

const CartList = (props) => {
  const CartCtx = useContext(CartContext);
  const cart = CartCtx.cart; 
  let cost = Math.abs(cart.cost).toFixed(2); 
  const decreaseItemHandler = (id) => {
    CartCtx.removeItem(id);
  }
  
  const increaseItemHandler = (item) => {
    CartCtx.addItem({...item, amount: 1});
  }

  let content = cart.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onDecrease={decreaseItemHandler.bind(null, item.id)}
      onIncrease={increaseItemHandler.bind(null, item)}
    />
  ));

  return <Fragment>
    <ul className={classes['cart-list']}>
      {content}
    </ul>
    <div className={classes.process}>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cost}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemoveCart} className={`${classes.button} ${classes['button--close']}`}>Close</button>
        {cost !== '0.00' && <button onClick={()=>{console.log('Ordering...');}} className={`${classes.button} ${classes['button--order']}`}>Order</button>}
      </div>
    </div>
  </Fragment>
};

export default CartList;
