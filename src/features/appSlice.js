import { createSlice } from "@reduxjs/toolkit";
// app slice for loading state and user authentication flag
const initialState = {
  isLoading: false,
  isAuthenticated: false, //setIsAuth
  hasError: "",
  height: "",
  searchTerm: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    appLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    getDivHeight: (state, action) => {
      state.height = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    loginComplete: (state) => {
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.hasError = "";
    },
  },
});
export const {
  loginComplete,
  setSearchTerm,
  getDivHeight,
  logoutUser,
  appLoading,
} = appSlice.actions;

export default appSlice.reducer;
