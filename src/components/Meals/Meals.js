import React from 'react';
import MealList from './Meal/MealList';

import MealSummary from './MealSummary';

const Meals = (props) => {
  return <main>
    <MealSummary />
    <MealList />
  </main>
};

export default Meals;