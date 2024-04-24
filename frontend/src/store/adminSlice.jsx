/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setAdmin: (state, action) => {state = action.payload},
        removeAdmin:state=>{state={}}
    },
})
export default adminSlice.reducer
export const {setUser,removeUSer}=adminSlice.actions