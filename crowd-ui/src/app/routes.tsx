import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../features/home/Home-page';
import Sentiment from '../features/sentiment/Sentiment';

function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/sentiment" component={Sentiment} />
    </>
  );
}

export default Routes;
