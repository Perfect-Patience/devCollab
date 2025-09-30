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

export const updateProject = createAsyncThunk('/project/updateProject', async ({ id, projectData }, thunkAPI) => {
    console.log("updating project....")
    try {
        const res = await api.patch(`/project/${id}`, projectData)

        console.log(res)
        return res.data
    } catch (error) {
        if (error.response && error.response.data.message) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
        return thunkAPI.rejectWithValue('Something went wrong while updating the project.');
    }
})

export const deleteProject = createAsyncThunk('/project/deleteProject', async (projectId, thunkAPI) => {
    console.log("deleting project....")
    try {
        const res = await api.delete(`/project/${projectId}`)

        console.log(res)
        return res.data
    } catch (error) {
        if (error.response && error.response.data.message) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
        return thunkAPI.rejectWithValue('Something went wrong while deleting the project.');
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
                state.projectError = action.payload || action.error
            })


            // post project

            .addCase(postProject.pending, (state) => {
                state.projectLoading = true;
            })
            .addCase(postProject.fulfilled, (state, action) => {
                state.projectLoading = false,
                state.project = action.payload
            })
            .addCase(postProject.rejected, (state, action) => {
                state.projectLoading = false,
                state.project = null,
                state.projectError = action.payload
            })

            // update project
            .addCase(updateProject.pending, (state) => {
                state.projectLoading = true;
            })
            .addCase(updateProject.fulfilled, (state, action) => {
                state.projectLoading = false,
                state.project = action.payload
            })
            .addCase(updateProject.rejected, (state, action) => {
                state.projectLoading = false,
                state.projectError = action.payload
            })

            // delete project
            .addCase(deleteProject.pending, (state) => {
                state.projectLoading = true;
            })
            .addCase(deleteProject.fulfilled, (state) => {
                state.projectLoading = false,
                // The project is deleted, so we can set it to null or handle as needed
                state.project = null 
            })
            .addCase(deleteProject.rejected, (state, action) => {
                state.projectLoading = false,
                state.projectError = action.payload
            });
    }
});

export default projectSlice.reducer;