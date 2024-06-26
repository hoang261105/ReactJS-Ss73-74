import { configureStore } from "@reduxjs/toolkit";
import workReducer from "./reducers/workReducer";

export const store = configureStore({
    reducer: {
       works: workReducer 
    }
})