import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <div className={classes["form-controls"]}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
      </div>
      <button className={classes.button}>+ Add</button>
    </div>
  );
});

export default Input;
