import mealsImage from '../../assets/meals.jpg';

import classes from './Hero.module.css';

const Hero = () => {
  return <div className={classes.hero}>
    <img src={mealsImage} alt='So many delicious food around here!' />
  </div>
};

export default Hero;