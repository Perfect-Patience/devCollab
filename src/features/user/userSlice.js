import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: null
}

const fetchUsers = createAsyncThunk('user/auth', async () => {
    const res = await api
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},

})

export default userSlice.reducer;