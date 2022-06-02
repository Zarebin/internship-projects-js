import { createAction } from "@reduxjs/toolkit";

export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const POST_DATA = "POST_DATA";
export const getUsersFetch = createAction(GET_USERS_FETCH);
export const postData = createAction<any>(POST_DATA);
