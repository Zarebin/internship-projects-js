import {
  call, put, SagaReturnType, takeEvery,
} from 'redux-saga/effects';
import { fetchUsers, postUserData } from './sentimentAPI';
import { setQuestion, setLoading, clearQuestion } from './sentimentSlice';
import { GET_USERS_FETCH, POST_DATA } from './actions';

type FetchUserResponseType = SagaReturnType<typeof fetchUsers>;
type PostUserResponseType = SagaReturnType<typeof postUserData>;

function* GetUsersFetch() {
  const response: FetchUserResponseType = yield call(fetchUsers as any);
  yield put(setQuestion(response.data));
  yield put(setLoading(false));
}

function* postUsersFetch(action: any) {
  // #FIXME: this should be get from userSelector
  const userId = 0;
  const data = action.payload;
  yield put(setLoading(true));
  const response: PostUserResponseType = yield call(postUserData, data, userId);
  if (response.status === 200) {
    yield put(clearQuestion());
    yield put(setLoading(false));
  } else {
    yield put(setLoading(true));
  }
}

function* sentimentSaga() {
  yield takeEvery(POST_DATA, postUsersFetch);
  yield takeEvery(GET_USERS_FETCH, GetUsersFetch);
}

export default sentimentSaga;
