import React from 'react';

import classes from './Input.module.css';

const Input = props => {
  return <div className={classes.input}>
    <div className={classes['form-controls']}>
      <label htmlFor='input'>Amount</label>
      <input id='input' type='number' min='1' max='5' step='1' />
    </div>
    <button className={classes.button}>+ Add</button>
  </div>
};

export default Input;