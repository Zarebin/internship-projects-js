import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
  question: {} as any,
  isLoading: true,
};
const foodCompareSlice = createSlice({
  name: 'foodCompare',
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    clearQuestion: (state) => {
      state.question = {};
    },
  },
});

export const selectLoading = (state: RootState) => state.foodCompareReducer.isLoading;
export const selectQuestion = (state: RootState) => state.foodCompareReducer.question;

export const { setQuestion, setLoading, clearQuestion } = foodCompareSlice.actions;

export default foodCompareSlice.reducer;
