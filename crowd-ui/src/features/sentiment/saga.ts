import {
  call, put, SagaReturnType, takeEvery,
} from 'redux-saga/effects';
import { fetchSentimentQuestion, postSentimentData } from './sentimentAPI';
import { setQuestion, setLoading, clearQuestion } from './sentimentSlice';
import { GET_USERS_FETCH, POST_DATA } from './actions';

type FetchSentimentResponseType = SagaReturnType<typeof fetchSentimentQuestion>;
type PostUserResponseType = SagaReturnType<typeof postSentimentData>;

function* GetUsersFetch() {
  const response: FetchSentimentResponseType = yield call(fetchSentimentQuestion as any);
  if (response.status === 200) {
    yield put(setQuestion(response.data));
    yield put(setLoading(false));
  } else {
    yield put(setLoading(true));
  }
}

function* postUsersFetch(action: any) {
  // #FIXME: this should be get from userSelector
  const userId = 0;
  const data = action.payload;
  yield put(setLoading(true));
  const response: PostUserResponseType = yield call(postSentimentData, data, userId);
  if (response.status === 200) {
    yield put(clearQuestion());
    yield put(setLoading(false));
  } else {
    yield put(setLoading(true));
  }
}

function* sentimentSaga() {
  yield takeEvery(GET_USERS_FETCH, GetUsersFetch);
  yield takeEvery(POST_DATA, postUsersFetch);
}

export default sentimentSaga;
