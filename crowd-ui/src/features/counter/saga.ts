import { takeEvery, put } from 'redux-saga/effects';

import {INCREMENT_ASYNC_ACTION_TYPE} from "./actions";
import {increment} from "./counterSlice";

type IncrementAsyncPayloadType = any;

function* incrementAsync(action: IncrementAsyncPayloadType) {
    yield put(increment())
    console.log('saga', action);
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery(INCREMENT_ASYNC_ACTION_TYPE, incrementAsync);
}

export default mySaga;
