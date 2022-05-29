import { fork, all } from 'redux-saga/effects';
import counterSaga from '../features/counter/saga';
import FoodFactsSaga from '../features/foodFacts/saga'

export default function* rootsaga() {
  yield all([
    fork(counterSaga),
    fork(FoodFactsSaga)
  ]);
}
