import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../features/home/Home-page';
import TranslationValidation from '../features/translationValidation/TranslationValidation';

function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/translationValidation" component={TranslationValidation} />
    </>
  );
}

export default Routes;
