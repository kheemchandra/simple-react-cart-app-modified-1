import React, { useContext, useRef } from "react";

import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input/Input";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const CartCtx = useContext(CartContext);
  const inputRef = useRef();
  let item = props.item;

  const submitHandler = (event) => {
    event.preventDefault();
    let amount = inputRef.current.value.trim(); 
    if(+amount >5 || +amount < 1)return; 
    CartCtx.addItem({...item, amount: +amount});
  };

  return (
    <li className={classes["meal-item"]}>
      <div>
        <h1>{item.name}</h1>
        <div className={classes.summary}>
          <span className={classes.description}>{item.description}</span>
          <span className={classes.price}>${item.price}</span>
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <Input
          ref={inputRef}
          label="Amount"
          input={{
            id: "input_" + item.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
      </form>
    </li>
  );
};

export default MealItem;
