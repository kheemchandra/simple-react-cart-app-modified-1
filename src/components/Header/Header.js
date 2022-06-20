import React from 'react';
import CartButton from '../Cart/CartButton';

import classes from './Header.module.css';

const Header = props => {
  return <header className={classes.header}>
    <h1>ReactMeals</h1>
    <CartButton onClick={props.onShowCart} />
  </header>
};

export default Header;