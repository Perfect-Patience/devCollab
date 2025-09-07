import { api } from "@/config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: null
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (userId) => {

    const res = await api.get(`/auth/${userId}`);

    return res.data;
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false,
                state.user = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false,
                state.error = action.error
            })
    }

});

export default userSlice.reducer;