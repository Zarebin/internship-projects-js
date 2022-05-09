import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    gender: "",
  },
  reducers: {
    selectedGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const rootReducer = rootSlice.reducer;
export const { selectedGender } = rootSlice.actions;
