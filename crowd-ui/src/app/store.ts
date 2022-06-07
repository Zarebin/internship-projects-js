import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../features/counter/counterSlice';
import rootSaga from './sagas';
import sentimentReducer from '../features/sentiment/sentimentSlice';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    counter: counterReducer,
    sentimentReducer,
  },
  middleware: [sagaMiddleware],
});

export default function configureAppStore() {
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
