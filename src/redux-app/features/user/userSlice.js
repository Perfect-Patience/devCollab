import { api } from "@/config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
  try {
    const res = await api.get(`/auth/${userId}`);

    return res.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }

    return thunkAPI.rejectWithValue("could not fetch user by id");
  }
});

export const loadUser = createAsyncThunk("loaduser", async (_, thunkAPI) => {
  try {
    const res = await api.get("/auth/loadUser");
    return thunkAPI.fulfillWithValue(res.data);
  } catch (error) {
    if (error.response && error.response.data.message) {
      return thunkAPI.rejectWithValue(null);
    }

    return thunkAPI.rejectWithValue(null);
  }
});

export const loginUser = createAsyncThunk(
  "login",
  async (loginData, thunkAPI) => {
    try {
      const res = await api.post("/auth/login", loginData);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }

      return thunkAPI.rejectWithValue(
        "something went wrong. Could not login user"
      );
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userId, userData, thunkAPI) => {
    try {
      const res = await api.patch(`/auth/${userId}`, userData);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data);
      }

      return thunkAPI.rejectWithValue("could not update user profile");
    }
  }
);

export const profileUpload = createAsyncThunk(
  "auth/profile",
  async ({userId, userImage}, thunkAPI) => {
    try {
      const res = await api.patch(`auth/${userId}/profilePhoto`, userImage, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data);
      }

      return thunkAPI.rejectWithValue("could not update user profile photo");
    }
  }
);

export const logoutUser = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    console.log("user about to be logged out");
    const res = await api.post("/auth/logout");
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data.message) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }

    if (error.message) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return thunkAPI.rejectWithValue("something went wrong");
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        (state.loading = false), (state.user = action.payload);
      })
      .addCase(fetchUser.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error);
      })

      // login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })

      // this is for loaduser cases
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })

      // this is for user profile image upload
      .addCase(profileUpload.pending, (state) => {
        state.loading = true;
      })
      .addCase(profileUpload.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(profileUpload.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })

      // logout user
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
