import { createSlice } from "@reduxjs/toolkit";
const initialState={
  Information:{},
  isLoading: false,
  
};

const foodFActsSlice=createSlice({
  name: "foodFacts",
  initialState,
  reducers:{
    setInformation:(state,action)=>{
      state.Information=action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    clearInformation: (state) => {
      state.Information = {};
    },
  }
}) 
   
    
export const selectData=(state:any)=>(state.FoodFactsReducer.Information)
export const selectLoading=(state:any) => state.FoodFactsReducer.isLoading;


export const {setInformation,setLoading,clearInformation} = foodFActsSlice.actions  
export default foodFActsSlice.reducer