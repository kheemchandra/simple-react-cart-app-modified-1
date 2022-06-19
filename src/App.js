import React, { Fragment } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Meals />
    </Fragment>
  );
}

export default App;
