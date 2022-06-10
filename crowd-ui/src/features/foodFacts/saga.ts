import {
  call, put, takeEvery, SagaReturnType,
} from 'redux-saga/effects';
import { getFoodQuestion, PostData } from './FoodFactsAPI';
import { setInformation, setLoading, clearInformation } from './FoodFactsSlice';
import { GET_DATA_FETCH, POST_DATA } from './actions';

type getFoodQuestionType = SagaReturnType<typeof getFoodQuestion>;
type PostDataType = SagaReturnType<typeof PostData>;

function* GetInformation() {
  const response: getFoodQuestionType = yield call(getFoodQuestion);
  yield put(setInformation(response.singleQuestion));
  yield put(setLoading(false));
}

function* postInformation(action: any) {
  const userId = 0;
  const data = action.payload;
  yield put(setLoading(true));
  const response: PostDataType = yield call(
    PostData,
    data,
    userId,
  );
  // @ts-ignore
  if (response.status === 200) {
    yield put(clearInformation());
    yield put(setLoading(false));
  } else {
    yield put(setLoading(true));
  }
}

function* FoodFactsSaga() {
  yield takeEvery(POST_DATA, postInformation);
  yield takeEvery(GET_DATA_FETCH, GetInformation);
}
export default FoodFactsSaga;
