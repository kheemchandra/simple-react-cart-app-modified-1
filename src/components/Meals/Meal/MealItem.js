import React from "react";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes['meal-item']}>
      <div>
        <h1>{props.name}</h1>
        <div className={classes.summary}>
          <span className={classes.description}>{props.description}</span>
          <span className={classes.price}>${props.price}</span>
        </div>
      </div>
      <form>
        <div>
          <label>Amount</label>
          <input type="number" />
        </div>
        <button>+ Add</button>
      </form>
    </li>
  );
};

export default MealItem;
