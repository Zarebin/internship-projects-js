import { createAction } from '@reduxjs/toolkit';

export const GET_SENTENCE_FETCH = 'GET_SENTENCE_FETCH';
export const POST_SENTENCE_DATA = 'POST_SENTENCE_DATA';
export const getSentenceFetch = createAction(GET_SENTENCE_FETCH);
export const postUserData = createAction<any>(POST_SENTENCE_DATA);
