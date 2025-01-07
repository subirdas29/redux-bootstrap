import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{

        //(anonymous function) pure function(ja input dibo same output dibe) hote hobe and plain object return korte hbe
        increment:(state,action)=>{ 
        
            state.count = state.count + action.payload;
        },
        decrement:(state)=>{
            state.count = state.count -1;
        }
    }
})

export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer