import { api } from "@/config/axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
loading: false,
error: null,
projects: null
}

export const getUserProjects = createAsyncThunk('userProjects', async(userId, thunkAPI) =>{
    try {
        const res = await api.get(`/project/user/${userId}`);
        console.log(res.data.projects)
    return res.data.projects;

    } catch (error) {
        if(error.response && error.response.data.message){
            return thunkAPI.rejectWithValue(error.response.data.message)
        }

        return thunkAPI.rejectWithValue('Something went wrong')
    }
} )

const userProjectsSlice = createSlice({
    name: 'userProjects',
    initialState,
    extraReducers : (builder) => {
        builder
        .addCase(getUserProjects.pending, (state)=> {
            state.loading = true;
        })

        .addCase(getUserProjects.fulfilled, (state, action) => {
            state.loading = false,
            state.projects = action.payload
        })
        .addCase(getUserProjects.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
        })
    }
})


export default userProjectsSlice.reducer