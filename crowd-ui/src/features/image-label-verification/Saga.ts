import {
  call,
  put,
  takeEvery,
  select,
  SagaReturnType,
} from 'redux-saga/effects';
// import Api from '...'
import { fetchQuestion, PostUserData } from './api';
import { GET_ASYNC_NEW_PHOTO, POST_DATA } from './Actions';
import {
  setLoading,
  selectCategoryTitle,
  getPhoto,
  clearQuestion,
} from './imageLabelVerificationSlice';

type fetchDataType = SagaReturnType<typeof selectCategoryTitle>;

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getAsyncPhoto() {
  const currentCategoryTitle: fetchDataType = yield select(selectCategoryTitle);
  // console.log("You are in SAGA for photo");
  const question: fetchDataType = yield call(
    fetchQuestion(currentCategoryTitle)
  );
  yield put(getPhoto(question));
  yield put(setLoading(false));
}

function* postUsersFetch(action: any) {
  //  FIXME: this should be get from userSelector
  const userId = 0;
  const data = action.payload;
  yield put(setLoading(true));
  // @ts-ignore
  const response = yield call(PostUserData, data, userId);

  if (response.status === 200) {
    yield put(clearQuestion());
    yield put(setLoading(false));
  } else {
    yield put(setLoading(true));
  }
}

function* mySaga() {
  yield takeEvery(POST_DATA, postUsersFetch);
  yield takeEvery(GET_ASYNC_NEW_PHOTO, getAsyncPhoto);
}

export default mySaga;
