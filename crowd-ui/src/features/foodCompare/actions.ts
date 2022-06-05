// import { createAction } from '@reduxjs/toolkit';

// import { AnyAction, createAction } from '@reduxjs/toolkit';
// export const INCREMENT_ASYNC_ACTION_TYPE = 'tasks/incrementAsyncAction';
// export const incrementAsyncAction = createAction<any>(INCREMENT_ASYNC_ACTION_TYPE);


// export const GET_USERS_FETCH = "GET_USERS_FETCH";
// export const POST_DATA = "POST_DATA";
// export const getUsersFetch = createAction(GET_USERS_FETCH);
// export const postData = createAction(POST_DATA);


import {AnyAction, createAction } from "@reduxjs/toolkit";

export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const POST_DATA = "POST_DATA";
export const getUsersFetch = createAction(GET_USERS_FETCH);
export const postData = createAction<any>(POST_DATA);