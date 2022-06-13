import { fork } from 'redux-saga/effects'
import getPhotoSaga from "../features/image-label-verification/Saga";


export default function* rootSaga() {
    yield fork(getPhotoSaga)
    //yield fork(usersSaga)
    // yield fork(saga2)
    // yield fork(saga3)
    // code after fork-effect
}