import { call, put, takeEvery ,SagaReturnType} from 'redux-saga/effects'
import {getSentenceFetch} from "./slice";
import {GET_SENTENCE_FETCH} from './action';
import {fetch} from './api';

type FetchUserResponseType=SagaReturnType<typeof fetch>

function* workGetSentenceFetch(){
    const sentences: FetchUserResponseType=yield call(fetch);
    yield put(getSentenceFetch(sentences));

}

function* sentenceSaga () {
    //Similar to sync await --first part the name of createSlice and the second of is reducer from slice.js --two part the name of function you call it
    //  yield takeEvery('sentenceSlice/getSentenceFetch',workGetSentenceFetch);
    //when call sentenceSaga,takeEvery(GET_SENTENCE_FETCH) call action that (export const GET_SENTENCE_FETCH = 'GET_SENTENCE_FETCH'; )
    //after that the first part of GET_SENTENCE_FETCH is call that fire (export  const getSentenceFetch=createAction(GET_SENTENCE_FETCH);)
    yield takeEvery(GET_SENTENCE_FETCH,workGetSentenceFetch);
}


export default sentenceSaga;