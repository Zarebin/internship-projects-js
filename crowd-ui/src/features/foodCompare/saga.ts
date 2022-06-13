import {
  call, put, SagaReturnType, takeEvery,
} from 'redux-saga/effects';
import { fetchfoodCompare, postUserData } from './foodCompareAPI';
import { setQuestion, setLoading, clearQuestion } from './foodCompareSlice';
import { GET_USERS_FETCH, POST_DATA } from './actions';

type FetchUserResponseType = SagaReturnType<typeof fetchfoodCompare>;
type PostUserResponseType = SagaReturnType<typeof postUserData>;

function* GetUsersFetch() {
  const response: FetchUserResponseType = yield call(fetchfoodCompare as any);
  console.log('Saga response:', response);
  yield put(setQuestion(response));
  yield put(setLoading(false));
}
// type x = SagaReturnType<typeof postUserData>
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

function* foodCompareSaga() {
  yield takeEvery(POST_DATA, postUsersFetch);
  yield takeEvery(GET_USERS_FETCH, GetUsersFetch);
}

export default foodCompareSaga;
