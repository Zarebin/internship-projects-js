import { createAction } from '@reduxjs/toolkit';

export const GET_ASYNC_NEW_PHOTO = 'photo/getAsync';
export const getAsyncPhotoWithSaga = createAction(GET_ASYNC_NEW_PHOTO);

export const CLEAR_ASYNC_QUESTION = 'photo/getAsync';
export const clearQuestionWithSaga = createAction(CLEAR_ASYNC_QUESTION);

export const POST_DATA = 'POST_DATA';
export const postData = createAction<any>(POST_DATA);
