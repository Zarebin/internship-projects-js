import { createAction } from '@reduxjs/toolkit';

export const GET_DATA_FETCH = 'GET_DATA_FETCH';
export const POST_DATA = 'POST_DATA';
export const getDataFetch = createAction(GET_DATA_FETCH);
export const postData = createAction<any>(POST_DATA);
