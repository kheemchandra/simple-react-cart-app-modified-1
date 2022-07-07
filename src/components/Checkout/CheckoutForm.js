import useInput from "../../hooks/use-Input";
import classes from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {

  const {
    value: name,
    hasError: nameHasError,
    isValid: nameIsValid,
    changeValueHandler: changeNameHandler,
    blurValueHandler: blurNameHandler,
    reset: resetName,
  } = useInput((name) => name.trim() !== "");

  const {
    value: address,
    hasError: addressHasError,
    isValid: addressIsValid,
    changeValueHandler: changeAddressHandler,
    blurValueHandler: blurAddressHandler,
    reset: resetAddress,
  } = useInput((address) => address.trim() !== "");

  const nameInputClass = nameHasError
    ? `${classes.input} ${classes.invalid}`
    : `${classes.input}`;
  const addressInputClass = addressHasError
    ? `${classes.input} ${classes.invalid}`
    : `${classes.input}`;

  const formIsValid = nameIsValid && addressIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    props.onSubmit({name, address});

    
    resetName();
    resetAddress();
  };

  return (
    <form onSubmit={submitHandler} className={classes["form"]}>
      <svg
        onClick={props.onCancelOrder}
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
          <p className={classes["error-text"]}>Please Enter a valid name.</p>
        )}
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="address">Your Address</label>
        <input
          className={addressInputClass}
          id="address"
          value={address}
          onChange={changeAddressHandler}
          onBlur={blurAddressHandler}
        />
        {addressHasError && (
          <p className={classes["error-text"]}>Please Enter a valid address.</p>
        )}
      </div>
      <button disabled={!formIsValid}>Checkout</button>
    </form>
  );
};

export default CheckoutForm;
