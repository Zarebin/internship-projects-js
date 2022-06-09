import { fork, all } from 'redux-saga/effects';
import sentimentSaga from '../features/sentiment/saga';

export default function* rootsaga() {
  yield all([fork(sentimentSaga)]);
}
