// import { type } from 'os';
// import { Saga } from 'redux-saga';
// import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
// import {fetchfoodCompare} from './foodCompareAPI';
// import {GET_DATA, NEXT_INFO} from "./actions";
// import {GetDataFetch, GetNextInfo} from './foodCompareSlice';
// type FetchUserResponseType = SagaReturnType<typeof fetchfoodCompare>;
// type FetchDataResponseType = SagaReturnType<typeof fetchfoodCompare>;
// // type IncrementAsyncPayloadType = any;

// function* getDataAsync() {
    
//     const input:FetchDataResponseType = yield call(fetchfoodCompare as any);
//     yield put(GetDataFetch(input));
//     const nextinput:FetchDataResponseType = yield call(fetchfoodCompare as any);
//     yield put(GetNextInfo(nextinput));
//     console.log("From saga", input);
// }
// function* workGetUsersFetch() {
//   const inputs: FetchUserResponseType = yield call(fetchfoodCompare as any);
//   yield put(GetDataFetch(inputs));
// }
// /*
//   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
//   Allows concurrent fetches of user.
// */

// function* mySaga() {
//     yield takeEvery(GET_DATA, getDataAsync);
//     yield takeEvery(NEXT_INFO, getDataAsync);
// }

// export default mySaga;


// // //#TODO handle dispatch order
// // import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// // import { fetchUsers, PostUserData } from "./foodCompareAPI";
// // import { setQuestion, setLoading, clearQuestion } from "./foodCompareSlice";
// // import { GET_USERS_FETCH, POST_DATA } from "./actions";

// // function* GetUsersFetch() {
// //   const response = yield call(fetchUsers);
// //   yield put(setQuestion(response.random));
// //   yield put(setLoading(false));
// // }

// // function* postUsersFetch(action) {
// //   //#FIXME: this should be get from userSelector
// //   const userId = 0;
// //   const data = action.payload;
// //   yield put(setLoading(true));
// //   const response = yield call(PostUserData, data, userId);

// //   if (response.status === 200) {
// //     yield put(clearQuestion());
// //     yield put(setLoading(false));
// //   } else {
// //     yield put(setLoading(true));
// //   }
// // }

// // function* mySaga() {
// //   yield takeEvery(POST_DATA, postUsersFetch);
// //   yield takeEvery(GET_USERS_FETCH, GetUsersFetch);
// // }

// // export default mySaga;


import { call, put, SagaReturnType, takeEvery } from "redux-saga/effects";
import { fetchfoodCompare, postUserData } from "./foodCompareAPI";
import { setQuestion, setLoading, clearQuestion } from "./foodCompareSlice";
import { GET_USERS_FETCH, POST_DATA } from "./actions";

type FetchUserResponseType = SagaReturnType<typeof fetchfoodCompare>;
type PostUserResponseType = SagaReturnType<typeof postUserData>;

function* GetUsersFetch() {
  const response: FetchUserResponseType = yield call(fetchfoodCompare as any);
  console.log("Saga response:",response)
  yield put(setQuestion(response));
  yield put(setLoading(false));
}

function* postUsersFetch(action: any) {
  //#FIXME: this should be get from userSelector
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