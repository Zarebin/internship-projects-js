import { fork, all } from 'redux-saga/effects';
import counterSaga from '../features/counter/saga';
import imageLabelSaga from '../features/image-label-verification/Saga';

export default function* rootsaga() {
  yield all([fork(counterSaga), fork(imageLabelSaga)]);
}
