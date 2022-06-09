import { fork, all } from 'redux-saga/effects';

import imageLabelSaga from '../features/image-label-verification/Saga';

export default function* rootsaga() {
  yield all([fork(imageLabelSaga)]);
}
