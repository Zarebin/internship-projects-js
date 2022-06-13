import { createAction} from "@reduxjs/toolkit";

export const GET_ASYNC_NEW_PHOTO = 'photo/addAsync';
export const getAsyncPhotoWithSaga = createAction(GET_ASYNC_NEW_PHOTO);
