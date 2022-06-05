// // import { createSlice } from "@reduxjs/toolkit";
// // const initialState={
// //   input:[] as any,
// //   nextinput:[] as any,
// //   step:0,
// //   inputs: [] as any,
// //   result: [] as any,
  
// // };

// // const foodCompareSlice=createSlice({
// //   name: "foodFacts",
// //   initialState,
// //   reducers:{
// //     GetDataFetch:(state, action)=>{
// //         state.input = action.payload;
// //     },
  
// //     GetNextInfo:(state,action)=>{
// //     state.input=action.payload;
// //     // state.nextinput = action.payload;
      
// //     },
// //     foodCompareHandler: (state, action) => {
// //       ++state.step;
// //       state.result = state.result.concat({
// //         input: state.inputs.data[state.step],
// //         userValue: action.payload,
// //       });
// //     }

// //     },
// //   })


// // export const {GetNextInfo,GetDataFetch,foodCompareHandler} = foodCompareSlice.actions  
// // export default foodCompareSlice.reducer


// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   question: {},
//   isLoading: false,
// };
// const foodCompareSlice = createSlice({
//   name: "foodCompare",
//   initialState,
//   reducers: {
//     setQuestion: (state, action) => {
//       state.question = action.payload;
//     },

//     setLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//     clearQuestion: (state) => {
//       state.question = {};
//     }
//   }
// });

// export const selectLoading = (state) => state.foodCompareReducer.isLoading;
// export const selectQuestion = (state) => state.foodCompareReducer.question;

// export const {
//   previousHandler,
//   sentimentHandler,
//   setQuestion,
//   setLoading,
//   clearQuestion,
// } = foodCompareSlice.actions;

// export default foodCompareSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
const initialState = {
  question: {} as any,
  isLoading: false,
};
const foodCompareSlice = createSlice({
  name: "foodCompare",
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
  state.foodCompareReducer.isLoading;
export const selectQuestion = (state: RootState) =>
  state.foodCompareReducer.question;

export const { setQuestion, setLoading, clearQuestion } =
foodCompareSlice.actions;

export default foodCompareSlice.reducer;