import React from 'react';

import CartProvider from './store/CartProvider';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Meals from './components/Meals/Meals';
import Overlays from './components/UI/Overlays/Overlays';

function App() {
  return (
    <CartProvider>
      <Overlays />
      <Header />
      <Hero />
      <Meals />
    </CartProvider>
  );
}

export default App;
