import { call, put, takeEvery, select  } from 'redux-saga/effects'
// import Api from '...'
import {fetchQuestion} from './api'
import { GET_ASYNC_NEW_PHOTO } from "./Actions";
import { getCategories, selectCategory, getPhoto } from './imageLabelVerificationSlice';
import { useAppSelector } from '../../app/hooks'




// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getAsyncPhoto(action) {
    const currentCategory = yield select(selectCategory)


     console.log('You are in SAGA for photo');
     console.log('current category from Saga', currentCategory);
     const rowData = yield call(fetchQuestion(currentCategory));
     console.log("this is data :",rowData[0].questions);
     const questions = rowData[0].questions
     yield put(getPhoto(questions[Math.floor(Math.random()*questions.length)]));
    // const users = yield call(fetchUsers());
    // yield put(addUsers(users.data));
    ;
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery(GET_ASYNC_NEW_PHOTO, getAsyncPhoto);
}

export default mySaga;