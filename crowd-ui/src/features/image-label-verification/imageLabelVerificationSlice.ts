import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
  categoryTitle: '' as any,
  categories: [] as any,
  selectedCategory: {} as any,
  newPhoto: {} as any,
  isLoading: false,
};

export const imageLabelVerificationSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      //  console.log("Selected category : ",state.selectedCategory);
    },
    getCategories: (state, action) => {
      state.categories = action.payload;
      //  console.log("getCategories is executed");
      // console.log(state.categories);
    },
    getPhoto: (state, action) => {
      state.newPhoto = action.payload;
      // console.log('get Photo is executed');
    },
    setCategorytitle: (state, action) => {
      state.categoryTitle = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    clearQuestion: (state) => {
      state.newPhoto = {};
    },
  },
});

export const {
  getPhoto, setCategory, getCategories, setCategorytitle, setLoading, clearQuestion,
} = imageLabelVerificationSlice.actions;

export const selectPhoto = (state: RootState) => state.imageLabelVerification.newPhoto;
export const selectCategory = (state: RootState) => state.imageLabelVerification.selectedCategory;
export const selectCategories = (state: RootState) => state.imageLabelVerification.categories;
export const selectCategoryTitle = (state: RootState) => state.imageLabelVerification.categoryTitle;
export const selectLoading = (state: RootState) => state.imageLabelVerification.isLoading;
export default imageLabelVerificationSlice.reducer;
