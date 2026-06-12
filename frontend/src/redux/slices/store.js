import {configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import uiReducer from "./uiSlices";
const store = configureStore({
    reducer: {
    auth:authReducer,
    ui:uiReducer,
    },
});

export default store;
