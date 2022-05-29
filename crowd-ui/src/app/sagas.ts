import { fork, all } from "redux-saga/effects";
import counterSaga from "../features/counter/saga";
import sentimentSaga from "../features/sentiment/saga";

export default function* rootsaga() {
  yield all([fork(counterSaga), fork(sentimentSaga)]);
}
