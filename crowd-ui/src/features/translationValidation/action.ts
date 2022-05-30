import { createAction} from "@reduxjs/toolkit";

//first part the name of createSlice and the second of is reducer from slice.js
// export const GET_SENTENCE_FETCH = 'sentenceSlice/getSentenceFetch';
export const GET_SENTENCE_FETCH = 'GET_SENTENCE_FETCH';
// the name of function you call it
// export const workGetSentenceFetch = createAction(GET_SENTENCE_FETCH);
export  const getSentenceFetch=createAction(GET_SENTENCE_FETCH);