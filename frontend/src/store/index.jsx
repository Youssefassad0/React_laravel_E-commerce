import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import adminReducer from './adminSlice'
export const store=configureStore({
    reducer:{
        user:userReducer,
        admin:adminReducer
    }
})