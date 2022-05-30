import {createSlice} from '@reduxjs/toolkit';
import any = jasmine.any;

const initialState = {
    sentences: [] as any, //retrieve from api
    output: [] as any, //send from app
    step: 0,
    useSelect:'' as any,
    //if user clicked cross button, useSelect:0
    //if user clicked tick button, useSelect:1
    //if user not choose or skip, useSelect:2
}
export const sentenceSlice = createSlice({
    name: 'sentences', //the name that reducer call
    initialState,
    reducers: {
        getSentenceFetch: (state, action) => {
            state.sentences = action.payload; //fetch the data into newSentence
        },
        postUserSelect: (state) => {
            postId: state.step++;
            state.output = state.output.concat({
                postId: state.step,
                userSelect: state.useSelect
            });
        },
        checkUserSelector:(state,action)=>{
            state.useSelect=action.payload;
            console.log('checkUserSelector : ',state.useSelect)

        },
        // crossUserSelector:(state,action)=>{
        //     state.userSelect+=action.payload;
        // },
        skipUserSelect: (state) => {
            state.useSelect=+2;
            state.output = state.output.concat({
                postId: state.step++,
                userSelect : state.useSelect,
            });
            console.log('checkUserSelector : ',state.useSelect)
        },
        previousUserSelect: (state) => {
            postId: --state.step;
        },
    },

});

export const {getSentenceFetch, postUserSelect,checkUserSelector,skipUserSelect,previousUserSelect} = sentenceSlice.actions;

// export const selectUsers = (state) => state.users.userList;
export default sentenceSlice.reducer;