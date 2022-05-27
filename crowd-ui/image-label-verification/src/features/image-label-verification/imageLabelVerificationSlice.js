import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories : [],
    selectedCategory : {},
    newPhoto : {},
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{
        setCategory : (state, action) =>{
            state.selectedCategory = action.payload
            console.log("Selected category : ",state.selectedCategory);
        },
        getCategories : (state, action) =>{
            state.categories = action.payload
            console.log("getCategories is executed");
            console.log(state.categories);
    },
        getPhoto : (state, action) => {
            state.newPhoto = action.payload
            console.log("get Photo is executed")
        }
}})

export const { getPhoto } = categorySlice.actions
export const { setCategory} = categorySlice.actions
export const { getCategories } = categorySlice.actions


export const selectPhoto = (state) => state.category.newPhoto;
export const selectCategory = (state) => state.category.selectedCategory;
export const selectCategories = (state) => state.category.categories;


export default categorySlice.reducer
