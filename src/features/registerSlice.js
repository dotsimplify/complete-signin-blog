import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../api/authAPI";

// Async Thunk request to login url
export const sendMailRequest = createAsyncThunk(
  "register/sendMailRequest",
  async (loginData, { dispatch, rejectWithValue }) => {
    try {
      const data = await authAPI.sendMail(loginData);
      if (data) {
        dispatch(sendingMail());
      } else {
        return rejectWithValue({ hasError: data.message });
      }
    } catch (error) {
      if (error.message) {
        return rejectWithValue({ hasError: error.message });
      }
    }
  }
);

export const activationRequest = createAsyncThunk(
  "register/activationRequest",
  async (loginData, { dispatch, rejectWithValue }) => {
    try {
      const data = await authAPI.activateAccount(loginData);
      dispatch(activate(data.message));
    } catch (error) {
      return dispatch(activate(error.response.data.message));
    }
  }
);

export const usernameAvailable = createAsyncThunk(
  "register/usernameAvailable",
  async (details, { dispatch, rejectWithValue }) => {
    try {
      const data = await authAPI.usernameCheck(details);
      dispatch(userCheck(data.message));
    } catch (error) {
      return rejectWithValue({ hasError: error.message });
    }
  }
);

const initialState = {
  mailSent: false, //setIsAuth
  hasError: "",
  activationMessage: "",
  userAvailablity: false,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    sendingMail: (state) => {
      state.mailSent = true;
    },
    activate: (state, action) => {
      state.activationMessage = action.payload;
    },
    userCheck: (state, action) => {
      state.userAvailablity = action.payload;
    },
    hasErr: (state, action) => {
      state.hasError = action.payload;
    },
  },
});
export const { sendingMail, hasErr, userCheck, activate } =
  registerSlice.actions;

export default registerSlice.reducer;
