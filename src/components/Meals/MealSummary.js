import Card from '../UI/Card/Card';
import classes from './MealSummary.module.css';

const MealSummary = () => {
  return (
    <Card className={classes.section}> 
      <h1>Delicious Food, Delivered To You</h1>
      <div className={classes.description}>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div> 
    </Card>
  );
};

export default MealSummary;
