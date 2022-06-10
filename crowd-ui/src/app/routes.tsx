import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../features/home/Home-page';
import FoodFacts from '../features/foodFacts/FoodFacts';

function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/foodFacts" component={FoodFacts} />
    </>
  );
}

export default Routes;
