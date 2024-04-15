import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "../Features/courseSlice";

const store = configureStore({
    reducer : {
        courseReducer : courseSlice,
    }
})


export default store;