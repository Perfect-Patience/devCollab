import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice';
import projectReducer from './features/project/projectSlice';

export const store = configureStore({
    reducer: {
        auth: userReducer,
        project: projectReducer
    }
});