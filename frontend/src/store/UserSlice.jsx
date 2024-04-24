/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (state, action) => {state = action.payload},
        removeUSer:state=>{state={}}
    },
})
export default userSlice.reducer
export const {setUser,removeUSer}=userSlice.actions