import { AnyAction, createAction } from '@reduxjs/toolkit';

export const INCREMENT_ASYNC_ACTION_TYPE = 'tasks/incrementAsyncAction';

export const incrementAsyncAction = createAction<AnyAction>(
  INCREMENT_ASYNC_ACTION_TYPE
);
