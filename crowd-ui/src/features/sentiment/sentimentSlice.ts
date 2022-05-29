import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  inputs: [] as any,
  step: 0,
  result: [] as any,
};
const sentimentSlice = createSlice({
  name: "sentiment",
  initialState,
  reducers: {
    getDataFetch: (state, action) => {
      state.inputs = action.payload;
    },
    sentimentHandler: (state, action) => {
      ++state.step;
      state.result = state.result.concat({
        input: state.inputs.data[state.step],
        userValue: action.payload,
      });
    },
    previousHandler: (state) => {
      --state.step;
      state.result = state.result.concat({
        input: state.inputs.data[state.step],
        userValue: -1,
      });
    },
  },
});

export const { previousHandler, sentimentHandler, getDataFetch } =
  sentimentSlice.actions;
export default sentimentSlice.reducer;
