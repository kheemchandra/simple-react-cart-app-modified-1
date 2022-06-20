import React, { Fragment } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Meals from './components/Meals/Meals';
import Overlays from './components/UI/Overlays/Overlays';

function App() {
  return (
    <Fragment>
      <Overlays />
      <Header />
      <Hero />
      <Meals />
    </Fragment>
  );
}

export default App;
