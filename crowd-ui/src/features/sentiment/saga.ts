import { call, put, SagaReturnType, takeEvery } from "redux-saga/effects";
import { fetchUsers } from "./sentimentAPI";
import { getDataFetch } from "./sentimentSlice";
type FetchUserResponseType = SagaReturnType<typeof fetchUsers>;

function* workGetUsersFetch() {
  const inputs: FetchUserResponseType = yield call(fetchUsers as any);
  yield put(getDataFetch(inputs));
}

function* sentimentSaga() {
  yield takeEvery("GET_USERS_FETCH", workGetUsersFetch);
}

export default sentimentSaga;
