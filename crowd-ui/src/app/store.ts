import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas';
import translationReducer from '../features/translationValidation/slice';
import rootsaga from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    translationReducer,
    // sentenceReducer:sentenceReducer,
  },
  middleware: [sagaMiddleware],
});

export default function configureAppStore() {
  // then run the saga

  sagaMiddleware.run(rootsaga);
  return { store,  };
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
