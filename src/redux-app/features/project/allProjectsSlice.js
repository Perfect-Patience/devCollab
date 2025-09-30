import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/config/axios";

const initialState = {
  projects: [],
  loading: false,
  error: null,
};

export const getAllProjects = createAsyncThunk(
  "allProjects/getAllProjects",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/projects");
      return response.data.projects || [];
    } catch (error) {
      return rejectWithValue(error.response.data);
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