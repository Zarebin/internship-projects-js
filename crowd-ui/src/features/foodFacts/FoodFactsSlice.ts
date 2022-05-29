

// const initialState={
//   Information:[],
//   step:0,
//   // userValue:[]
 
  
// }

// export default function info(state=initialState, action:any) {
//   switch (action.type) {
//       case "GET_INFO_SUCCESS":
//         return {
//           ...state,
//           Information:action.informationFromSaga
//         }
//         case "NEXT_INFO":
//           return {
              
//           ...state,
//           step: ++state.step,
//           userValue: action.payload,
        
              
//           }
//     default:
//       return state;
//   }
// }

import { createSlice } from "@reduxjs/toolkit";
const initialState={
  Information:[],
  step:0,
  resultInformation: [],
  
};

const foodFActsSlice=createSlice({
  name: "foodFacts",
  initialState,
  reducers:{
    getInfoSuccess:(state,action)=>{
      
      state.Information=action.payload;
  
    },
    nextInfo:(state,action)=>{
      
    ++state.step;
    state.resultInformation=state.resultInformation.concat(action.payload)
      
    },
    previousInfo:(state,action)=>{
      
      --state.step;
      state.resultInformation=state.resultInformation.concat(action.payload)
        
      }

    },
  })


export const {getInfoSuccess,nextInfo,previousInfo} = foodFActsSlice.actions  
export default foodFActsSlice.reducer