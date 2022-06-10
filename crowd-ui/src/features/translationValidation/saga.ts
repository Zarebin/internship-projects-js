import {
  call, put, takeEvery, SagaReturnType,
} from 'redux-saga/effects';
import { getSentenceFetch, setLoading, postUserData } from './slice';
import { GET_SENTENCE_FETCH, POST_SENTENCE_DATA } from './action';
import { fetchSentence, postUserSelection } from './api';

type FetchUserResponseType = SagaReturnType<typeof fetchSentence>
type PostUserResponseType = SagaReturnType<typeof postUserSelection>;

function* GetSentenceFetch() {
  const response: FetchUserResponseType = yield call(fetchSentence);
  yield put(getSentenceFetch(response));
  yield put(setLoading(true));
  if (response.status >= 200 && response.status < 400) {
    yield put(setLoading(false));
  }
}

function* PostUserData(action: any):any {
  // #FIXME: this should be get from userSelector
  const userId: number = 0;
  const data: any = action.payload;
  data.userId = userId;
  const response: PostUserResponseType = yield call(postUserSelection, data);
  yield put(postUserData(data));
  yield put(setLoading(true));
  if (response.status >= 200 && response.status < 400) {
    yield put(setLoading(true));
  } else {
    yield put(setLoading(false));
  }
}

function* mySaga() {
  yield takeEvery(GET_SENTENCE_FETCH, GetSentenceFetch);
  yield takeEvery(POST_SENTENCE_DATA, PostUserData);
}

export default mySaga;
