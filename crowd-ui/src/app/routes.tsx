import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../features/home/Home-page';

import ImageLabelHome from '../features/image-label-verification/components/First-page/First-page.component';
import ImageLabelQuestions from '../features/image-label-verification/ImageLabelVerification';

const mainRoutes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/imageLabelVerification" component={ImageLabelHome} />
    <Route exact path="/imageLabelQuestions" component={ImageLabelQuestions} />
  </>
);

export default mainRoutes;
