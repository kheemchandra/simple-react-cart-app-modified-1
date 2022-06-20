import React, { useState } from 'react';

import CartProvider from './store/CartProvider';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Meals from './components/Meals/Meals';
import Overlays from './components/UI/Overlays/Overlays';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const removeCartHandler = () => {
    setIsCartShown(false);
  }

  return (
    <CartProvider>
      {isCartShown && <Overlays onRemoveCart={removeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <Meals />
    </CartProvider>
  );
}

export default App;
