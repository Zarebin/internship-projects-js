import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import FoodFactsReducer from '../features/foodFacts/FoodFactsSlice';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    FoodFactsReducer,
  },
  middleware: [sagaMiddleware],
});

export default function configureAppStore() {
  // then run the saga
  sagaMiddleware.run(rootSaga);
  return { store };
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
