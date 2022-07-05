import { useReducer } from "react";



const initialInputState = {
  value: '',
  isTouched: false,
};

const inputReducer = (state, action) => {
  if(action.type === 'INPUT'){
    return { value: action.value, isTouched: state.isTouched };
  }
  if(action.type === 'BLUR'){
    return { value: state.value, isTouched: true };
  }
  if(action.type === 'RESET'){
    return { value: '', isTouched: false };
  }
  return initialInputState;
};

const useInput = (validateValue) => {  
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState); 

  let isValueValid = false;
  if(validateValue(inputState.value)) isValueValid = true;

  const hasError = !isValueValid && inputState.isTouched;

  const changeValueHandler = event => {
    dispatch({type: 'INPUT', value: event.target.value}); 
  };

  const blurValueHandler = event => { 
    dispatch({type: 'BLUR'});
  }

  const reset = () => {
    dispatch({type: 'RESET'}); 
  }

  return {
    value: inputState.value,
    hasError,
    isValid: isValueValid,
    changeValueHandler,
    blurValueHandler,
    reset,
  };

};

export default useInput;