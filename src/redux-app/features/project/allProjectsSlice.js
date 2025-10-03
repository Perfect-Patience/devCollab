import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/config/axios";

const initialState = {
  projects: [],
  loading: false,
  error: null,
};

export const getAllProjects = createAsyncThunk(
  "allProjects/getAllProjects",
  async (_, thunkAPI) => {
    try {
      console.log("getting all projects")
      const response = await api.get("/project");
      console.log("response")
      console.log(response.data)
      return response.data || [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const allProjectsSlice = createSlice({
  name: "allProjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(getAllProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default allProjectsSlice.reducer;