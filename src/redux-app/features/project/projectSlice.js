import { api } from "@/config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectLoading:false,
    project: null,
    projectError: null
};

export const fetchProject = createAsyncThunk('/project/fetchProject', async (projectId) => {

    const res = await api.get(`/project/${projectId}`);

    return res.data;
})

export const postProject = createAsyncThunk('/project/postProject', async (project, thunkAPI) => {
    console.log("posting project....")
    try {
        const res = await api.post(`/project`,project )

        console.log(res)
        return res.data
    } catch (error) {
          if (error.response && error.response.data.message) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
        return thunkAPI.rejectWithValue('Something went wrong');
    }
})

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProject.pending, (state) => {
                state.projectLoading = true;
            })
            .addCase(fetchProject.fulfilled, (state, action) => {
                state.projectLoading = false,
                state.project = action.payload
            })
            .addCase(fetchProject.rejected, (state, action) => {
                state.projectLoading = false,
                state.project = null,
                state.projectError = action.error
            })


            // post project

            .addCase(postProject.pending, (state) => {
                state.loading = true;
            })
            .addCase(postProject.fulfilled, (state, action) => {
                state.loading = false,
                state.project = action.payload
            })
            .addCase(postProject.rejected, (state, action) => {
                state.loading = false,
                state.project = null,
                state.error = action.error
            });
    }
});

export default projectSlice.reducer;