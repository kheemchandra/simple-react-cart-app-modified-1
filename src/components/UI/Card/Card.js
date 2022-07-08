import React from 'react';

import classes from './Card.module.css';

const stopPropagationHandler = (event) => {
  event.stopPropagation();
};

const Card = props => {
  return <section onClick={stopPropagationHandler} className={`${classes.card} ${props.className ? props.className : ''}`}>
    {props.children}
  </section>
};

export default Card;