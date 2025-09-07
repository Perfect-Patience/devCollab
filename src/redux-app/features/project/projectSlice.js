import { api } from "@/config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    project: null,
    error: null
};

export const fetchProject = createAsyncThunk('/project/fetchProject', async (projectId) => {

    const res = await api.get(`/project/${projectId}`);

    return res.data;
})

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProject.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProject.fulfilled, (state, action) => {
                state.loading = false,
                state.project = action.payload
            })
            .addCase(fetchProject.rejected, (state, action) => {
                state.loading = false,
                state.project = null,
                state.error = action.error
            });
    }
});

export default projectSlice.reducer;