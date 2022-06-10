import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../features/home/Home-page';
import Counter from '../features/counter/Counter';
import TranslationValidation from '../features/translationValidation/TranslationValidation';

function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/translationValidation" component={TranslationValidation} />
    </>
  );
}

export default Routes;
