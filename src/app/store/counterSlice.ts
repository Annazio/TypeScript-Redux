import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { log } from "console";

interface InitialState {
    count: number,
    id: null,
    status: "loading" | "error" | "done";
}

const initialState: InitialState ={
    count: 0,
    id: null,
    status: "loading"
}

export const updtProfile = createAsyncThunk(
    "count/updtProfile",
    async(_, {dispatch, rejectWithValue, fulfillWithValue, getState}) =>{
        try{
          const response = await fetch(
            "htttps://jsonplaceholder.typicode.com/posts"
            );

           const data = await response.json();
           return {
            data, 
            result: fulfillWithValue(data)
           };
        } catch (e){
           return rejectWithValue(e)
        }
    }
)

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        plusOne(state) {
           state.count++
        },
        minusOne(state) {
            state.count--
         },
         resetCount(state) {
            state.count = 0
         },
    },
})

// export const {plusOne} = counterSlice.actions;
export const {reducer: counterReducer, actions: counterActions} = counterSlice;
export const asyncActions = {updtProfile}
export default counterSlice.reducer;