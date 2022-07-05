import { useEffect, useCallback } from "react";

import { Spinner } from "spin.js"; 

import Card from "../../UI/Card/Card";
import MealItem from "./MealItem";
import { useHttp } from "../../../hooks/use-http";

import classes from "./MealList.module.css";


let mealList = null;
const httpConfig = { URL: "https://food-order-894c5-default-rtdb.firebaseio.com/meals.json" };

const MealList = () => {
  const { isLoading, error, sendRequests } = useHttp();
 
  const cb = useCallback((applyData) => {
    mealList = (
      <ul>
        {applyData.map((item) => {
          return <MealItem key={item.id} item={item} />;
        })}
      </ul>
    );
  }, []);

  const fetchMeals = useCallback(() => {
    sendRequests(httpConfig, cb);
  }, [sendRequests, cb]);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  useEffect(() => {
    let target = document.getElementById('meal-list-spinner');
    let spinner = new Spinner().spin();
    if(isLoading){
      target.style.display = 'block';
      spinner.spin();
      target.appendChild(spinner.el); 
    }else{
      target.style.display = 'none';
      spinner.stop(); 

    }
  }, [isLoading]);

  let content = null;

  if (isLoading) {
    // content = <h1>Loading...</h1>; 
  }
  if (error) {
    content = <button onClick={fetchMeals}>Please reload the page.</button>;
  }
  if (!isLoading && !error) {
    content = mealList;
  }

  return <Card className={classes["meal-list"]}>
    <div id='meal-list-spinner'></div>
    {content}</Card>;
};

export default MealList;
