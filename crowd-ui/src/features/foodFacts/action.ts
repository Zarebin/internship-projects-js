
import {createAction, Action} from '@reduxjs/toolkit'


export const GetInfo=createAction("GET_INFO")
export const NextInfo=createAction<string>("NEXT_INFO")



// TypeScript

// import { createAction, Action } from '@reduxjs/toolkit'

// const increment = createAction<number>('INCREMENT')

// function someFunction(action: Action) {
//   // accessing action.payload would result in an error here
//   if (increment.match(action)) {
//     // action.payload can be used as `number` here
//   }
// }