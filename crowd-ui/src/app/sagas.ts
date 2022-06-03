import { fork, all } from 'redux-saga/effects';
import counterSaga from '../features/counter/saga';
import mySaga from "../features/translationValidation/saga";

export default function* rootsaga() {
  yield all([
    fork(counterSaga),
      fork(mySaga),
  ]);
}
