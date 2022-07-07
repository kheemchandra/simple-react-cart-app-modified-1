import React, { useReducer } from 'react';

import CartContext from './cart-context';

//{...item, amount: 5}
const defaultCart = {items: [], cost: 0};

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){ 
    const updatedState = {items: [], cost: 0};
    updatedState.cost = state.cost;
    updatedState.items = [...state.items]; 
    updatedState.cost += action.item.price * action.item.amount;
    let cartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    let cartItem = state.items[cartItemIndex];
    if(typeof(cartItem) === 'undefined'){ // new Item 
      updatedState.items.push(action.item);
    }else{
      updatedState.items[cartItemIndex] = {...cartItem, amount: cartItem.amount + action.item.amount};
    }
    return updatedState;
  }
  if(action.type === 'REMOVE'){ //filter return new obj
    const updatedState = {items: [], cost: 0};
    updatedState.cost = state.cost;
    updatedState.items = [...state.items]; 
    let cartItemIndex = state.items.findIndex(item => item.id === action.id);
    let cartItem = state.items[cartItemIndex];
    updatedState.cost -= cartItem.price;
    if(cartItem.amount === 1){    
      let updatedItems = updatedState.items.filter(item => item.id !== action.id);
      updatedState.items = updatedItems;
    }else{
      updatedState.items[cartItemIndex] = {...cartItem, amount: cartItem.amount - 1};
    }
    return updatedState;
  }
  if(action.type === 'RESET'){ 
    return defaultCart;
  }
  return defaultCart;
  
};

const addItemHandler = (dispatchCart, item) => {
  dispatchCart({type: 'ADD', item: item}); // item = {...item: item, amount: 3}
};

const removeItemHandler = (dispatchCart, id) => {
  dispatchCart({type: 'REMOVE', id: id});
}

const resetCartHandler = (dispatchCart) => {
  dispatchCart({type: 'RESET'});
};

function CartProvider(props) {
  const [cart, dispatchCart] = useReducer(cartReducer, defaultCart);


  const contextObject = {
    cart: cart, 
    addItem: addItemHandler.bind(null, dispatchCart),
    removeItem: removeItemHandler.bind(null, dispatchCart),
    resetCart: resetCartHandler.bind(null, dispatchCart),
  };
   
  return <CartContext.Provider value={contextObject}>
    {props.children}
  </CartContext.Provider>;
}

export default CartProvider;