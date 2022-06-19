import React from "react";

import Input from "../../UI/Input/Input";

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
        <Input />
      </form>
    </li>
  );
};

export default MealItem;
