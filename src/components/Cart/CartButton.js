import React from 'react';

import CartIcon from './CartIcon';

import classes from './CartButton.module.css';

const CartButton = props => {
  return <button className={classes.button}>
    <span className={classes['cart-icon']}><CartIcon /></span>
    <span>Your Cart</span>
    <span className={classes.total}>6</span>
  </button>
};

export default CartButton;