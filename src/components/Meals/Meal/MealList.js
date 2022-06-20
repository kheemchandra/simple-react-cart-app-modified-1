import React from "react";

import Card from "../../UI/Card/Card";
import MealItem from "./MealItem";

import classes from "./MealList.module.css";

const DUMMY_MEALS = [
  {
    id: "i1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "i2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "i3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "i4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealList = (props) => {
  let content = DUMMY_MEALS.map((item) => (
    <MealItem
      key={item.id}
      item={item}
    />
  ));
  return (
    <Card className={classes["meal-list"]}>
      <ul>{content}</ul>
    </Card>
  );
};

export default MealList;
