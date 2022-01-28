import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { setAuthorizationToken } from "../utils/setAuthorization";
import { authAPI } from "../api/authAPI";
export const userRequest = createAsyncThunk(
  "login/userRequest",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const data = await authAPI.authMe();
      dispatch(setUser(data));
    } catch (error) {
      if (error.message) {
        return rejectWithValue({ hasError: error.message });
      }
    }
  }
);
// Async Thunk request to login url
export const loginRequest = createAsyncThunk(
  "login/loginRequest",
  async (loginData, { dispatch, rejectWithValue }) => {
    try {
      const data = await authAPI.login(loginData);
      if (data.accessToken) {
        setAuthorizationToken(data.accessToken);
        Cookies.set("entryToken", data.accessToken);
        dispatch(loginComplete());
        dispatch(userRequest());
      } else {
        return rejectWithValue({ hasError: data.message });
      }
    } catch (error) {
      return rejectWithValue({ hasError: error.response.data.message });
    }
  }
);

export const refreshUserRequest = createAsyncThunk(
  "login/refreshUserRequest",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const data = await authAPI.authMe2();
      dispatch(setUser(data));
    } catch (error) {
      if (error.message) {
        return rejectWithValue({ hasError: error.message });
      }
    }
  }
);

const initialState = {
  isAuthenticated: false, //setIsAuth
  message: "",
  user: {},
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginComplete: (state) => {
      state.isAuthenticated = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    requestStatus: (state, action) => {
      state.message = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.hasError = "";
    },
  },
  extraReducers: {
    [loginRequest.pending]: (state) => {},
    [loginRequest.fulfilled]: (state, action) => {},
    [loginRequest.rejected]: (state, action) => {
      state.message = action.payload.hasError;
    },
  },
});
export const { loginComplete, requestStatus, logoutUser, setUser } =
  loginSlice.actions;

export default loginSlice.reducer;
