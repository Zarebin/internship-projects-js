import { fork, all } from 'redux-saga/effects';
import mySaga from '../features/translationValidation/saga';

export default function* rootSaga() {
  yield all([
    fork(mySaga),
  ]);
}
