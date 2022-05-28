import { fork, all } from 'redux-saga/effects';
import counterSaga from '../features/counter/saga';

export default function* rootsaga() {
  yield all([
    fork(counterSaga),
  ]);
}
