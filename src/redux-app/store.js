import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice';
import projectReducer from './features/project/projectSlice';
import userProjectReducer from './features/user/userProjectsSlice.js'
export const store = configureStore({
    reducer: {
        auth: userReducer,
        project: projectReducer,
        userProjects: userProjectReducer,
    }
});