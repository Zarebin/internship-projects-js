import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sentences: {} as any, // retrieve from api
  isLoading: true,
  userSentenceSelector: {} as any,
};
export const sentenceSlice = createSlice({
  name: 'sentences', // the name that reducer call
  initialState,
  reducers: {
    getSentenceFetch: (state, action) => {
      state.sentences = action.payload; // fetch the data into newSentence
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    postUserData: (state, action) => {
      state.userSentenceSelector = action.payload;
    },
    clearSentence: (state) => {
      state.sentences = {};
    },
  },
});

export const selectSentences = (state: any) => state.translationReducer.sentences;
export const selectLoading = (state: any) => state.translationReducer.isLoading;

export const {
  getSentenceFetch,
  postUserData,
  setLoading,
  clearSentence,
} = sentenceSlice.actions;

export default sentenceSlice.reducer;
