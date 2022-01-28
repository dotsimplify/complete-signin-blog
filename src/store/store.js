import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";
import loginReducer from "../features/loginSlice";
import registerReducer from "../features/registerSlice";
import appReducer from "../features/appSlice";
export const store = configureStore({
  reducer: {
    posts: postReducer,
    app: appReducer,
    auth: registerReducer,
    user: loginReducer,
  },
});
