import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCart = {
  items: [],  //{...item, amount: 5}
  cost: 0, // this is total cost of cart items
};

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){ 
    const updatedState = {...state}; 
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
    const updatedState = {...state};
    let cartItemIndex = state.items.findIndex(item => item.id === action.id);
    let cartItem = state.items[cartItemIndex];
    updatedState.cost -= cartItem.price;
    if(cartItem.amount == 1){    
      let updatedItems = updatedState.items.filter(item => item.id !== action.id);
      updatedState.items = updatedItems;
    }else{
      updatedState.items[cartItemIndex] = {...cartItem, amount: cartItem.amount - 1};
    }
    return updatedState;
  }
  return defaultCart;
  
};

const addItemHandler = (dispatchCart, item) => {
  dispatchCart({type: 'ADD', item: item}); // item = {...item: item, amount: 3}
};

const removeItemHandler = (dispatchCart, id) => {
  dispatchCart({type: 'REMOVE', id: id});
}

function CartProvider(props) {
  const [cart, dispatchCart] = useReducer(cartReducer, defaultCart);


  const contextObject = {
    cart: cart,
    totalAmount: 0, // total cost of cart items
    addItem: addItemHandler.bind(null, dispatchCart),
    removeItem: removeItemHandler.bind(null, dispatchCart)
  };
   
  return <CartContext.Provider value={contextObject}>
    {props.children}
  </CartContext.Provider>;
}

export default CartProvider;