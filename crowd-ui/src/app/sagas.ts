import { fork, all } from 'redux-saga/effects';
import counterSaga from '../features/counter/saga';
import foodCompareSaga from '../features/foodCompare/saga';

export default function* rootsaga() {
  // yield all([
    // fork(counterSaga),
    // fork(foodCompareSaga),
  // ]);

  yield all([fork(counterSaga), fork(foodCompareSaga)]);
}
