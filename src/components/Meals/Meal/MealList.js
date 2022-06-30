import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import MealItem from "./MealItem";

import classes from "./MealList.module.css";

let mealList = null; 

const MealList = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 

  const fetchMeals  = async () => {
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch("https://food-order-894c5-default-rtdb.firebaseio.com/meals.json");
      const MEALS = await response.json();      

      mealList = <ul>{MEALS.map(item => { 
        return <MealItem  key={item.id} item={item}/>
      })}</ul>;
      
      setError(false);
    }catch(e){      
      setError(true);
      console.log(e.message || 'An error occurred while fetching data')
    }
    
    setIsLoading(false);
  };

  useState(() => {
      fetchMeals();
  }, []);

  let content = null;

  if(isLoading){
    content = <h1>Loading...</h1>
  }
  if(error){
    content = <button onClick={fetchMeals}>Please reload the page.</button>
  }
  if(!isLoading && !error){
    content = mealList;
  }
  
  
  return (
    <Card className={classes["meal-list"]}>
      {content}
    </Card>
  );
};

export default MealList;
