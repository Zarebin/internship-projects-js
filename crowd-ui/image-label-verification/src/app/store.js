

import { configureStore} from '@reduxjs/toolkit'
import categoryReducer from '../features/image-label-verification/imageLabelVerificationSlice';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware() 


const store = configureStore({
    //reduder is a function that takes state and an action and does 
    //operations on state according to action an returns back new state.
    reducer: {
      category : categoryReducer,

    },
    middleware: [sagaMiddleware, ],
  })
  

export default function configureAppStore() {
    sagaMiddleware.run(rootSaga)
    return { store }
}