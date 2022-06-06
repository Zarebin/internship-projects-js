import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
const initialState = {
  question: {} as any,
  isLoading: true,
};
const sentimentSlice = createSlice({
  name: "sentiment",
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

export const selectLoading = (state: RootState) =>
  state.sentimentReducer.isLoading;
export const selectQuestion = (state: RootState) =>
  state.sentimentReducer.question;

export const { setQuestion, setLoading, clearQuestion } =
  sentimentSlice.actions;

export default sentimentSlice.reducer;
