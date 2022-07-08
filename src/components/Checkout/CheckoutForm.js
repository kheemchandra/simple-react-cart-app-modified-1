import useInput from "../../hooks/use-Input";
import classes from "./CheckoutForm.module.css";

const notEmpty = value => value.trim() !== '';
const isFiveChars = value => value.trim().length === 5;

const CheckoutForm = (props) => {

  const {
    value: name,
    hasError: nameHasError,
    isValid: nameIsValid,
    changeValueHandler: changeNameHandler,
    blurValueHandler: blurNameHandler,
    reset: resetName,
  } = useInput(notEmpty);

  const {
    value: street,
    hasError: streetHasError,
    isValid: streetIsValid,
    changeValueHandler: changeStreetHandler,
    blurValueHandler: blurStreetHandler,
    reset: resetStreet,
  } = useInput(notEmpty);

  const {
    value: postalCode,
    hasError: postalCodeHasError,
    isValid: postalCodeIsValid,
    changeValueHandler: changePostalCodeHandler,
    blurValueHandler: blurPostalCodeHandler,
    reset: resetPostalCode,
  } = useInput(isFiveChars);

  const {
    value: city,
    hasError: cityHasError,
    isValid: cityIsValid,
    changeValueHandler: changeCityHandler,
    blurValueHandler: blurCityHandler,
    reset: resetCity,
  } = useInput(notEmpty);

  const nameInputClass = nameHasError
    ? `${classes.input} ${classes.invalid}`
    : `${classes.input}`;
  const streetInputClass = streetHasError
    ? `${classes.input} ${classes.invalid}`
    : `${classes.input}`;
    const postalCodeInputClass = postalCodeHasError
    ? `${classes.input} ${classes.invalid}`
    : `${classes.input}`;
  const cityInputClass = cityHasError
    ? `${classes.input} ${classes.invalid}`
    : `${classes.input}`;

  const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    props.onSubmit({name, street, postalCode, city});

    
    resetName();
    resetStreet();
    resetPostalCode();
    resetCity();
  };

  return (
    <form onSubmit={submitHandler} className={classes["form"]}>
      <svg
        onClick={props.onCancelCheckout}
        className={classes["svg"]}
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
      </svg>

      <div className={classes["form-control"]}>
        <label htmlFor="name">Your Name</label>
        <input
          className={nameInputClass}
          id="name"
          value={name}
          onChange={changeNameHandler}
          onBlur={blurNameHandler}
        />
        {nameHasError && (
          <p className={classes["error-text"]}>Please Enter a valid name!</p>
        )} 
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="street">Street</label>
        <input
          className={streetInputClass}
          id="street"
          value={street}
          onChange={changeStreetHandler}
          onBlur={blurStreetHandler}
        />
        {streetHasError && (
          <p className={classes["error-text"]}>Please Enter a valid street!</p>
        )}
      </div> 
      <div className={classes["form-control"]}>
        <label htmlFor="postalCode">Postal Code</label>
        <input
          className={postalCodeInputClass}
          id="postalCode"
          value={postalCode}
          onChange={changePostalCodeHandler}
          onBlur={blurPostalCodeHandler}
        />
        {postalCodeHasError && (
          <p className={classes["error-text"]}>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="city">City</label>
        <input
          className={cityInputClass}
          id="city"
          value={city}
          onChange={changeCityHandler}
          onBlur={blurCityHandler}
        />
        {cityHasError && (
          <p className={classes["error-text"]}>Please Enter a valid city!</p>
        )}
      </div>
      <button disabled={!formIsValid}>Checkout</button>
    </form>
  );
};

export default CheckoutForm;
