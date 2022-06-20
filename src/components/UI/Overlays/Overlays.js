import React, { Fragment } from 'react';

import Card from '../Card/Card';
import CartList from '../../Cart/CartItems/CartList';

import classes from './Overlays.module.css';

const Backdrop = props => {
  return <div className={classes.backdrop}>    
  </div>
};

const Modal = props => {
  return <Card className={classes.modal}>
    <CartList />
  </Card>
};

const Overlays = props => {
  return <Fragment>
    <Backdrop />
    <Modal />
  </Fragment>
};

export default Overlays;