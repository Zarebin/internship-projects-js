import { fork, all } from 'redux-saga/effects';
import FoodFactsSaga from '../features/foodFacts/saga';

export default function* rootsaga() {
  yield all([fork(FoodFactsSaga)]);
}
