import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';

export interface imageLabelVerificationState {
    categories: any;
    selectedCategory: any;
    newPhoto: any;
    userAnswers: any;

  }
const initialState : imageLabelVerificationState = {
    categories : [],
    selectedCategory : {},
    newPhoto : {},
    userAnswers : [],
}

export const imageLabelVerificationSlice = createSlice({
    name: 'category',
    initialState,
    reducers:{
        setCategory : (state, action) =>{
            state.selectedCategory = action.payload
            //console.log("Selected category : ",state.selectedCategory);
        },
        getCategories : (state, action) =>{
            state.categories = action.payload
            //console.log("getCategories is executed");
            console.log(state.categories);
    },
        getPhoto : (state, action) => {
            state.newPhoto = action.payload
            //console.log("get Photo is executed")
    },
        setUserAnswer : (state, action) => {
            state.userAnswers.push(action.payload);
            //console.log("use answer reducer")
        }
}})

export const { getPhoto } = imageLabelVerificationSlice.actions
export const { setCategory} = imageLabelVerificationSlice.actions
export const { getCategories } = imageLabelVerificationSlice.actions
export const { setUserAnswer } = imageLabelVerificationSlice.actions


export const selectPhoto = (state: RootState) => state.imageLabelVerification.newPhoto;
export const selectCategory = (state: RootState) => state.imageLabelVerification.selectedCategory;
export const selectCategories = (state: RootState) => state.imageLabelVerification.categories;
export const selectUserAnswers = (state: RootState) => state.imageLabelVerification.userAnswers;


export default imageLabelVerificationSlice.reducer
