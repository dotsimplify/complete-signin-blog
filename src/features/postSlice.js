import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postsAPI } from "../api/postsAPI";
import { appLoading } from "./appSlice";
// async thunk request to get calls list
export const postsDataRequest = createAsyncThunk(
  "posts/postsDataRequest",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const data = await postsAPI.getPostsList();
      dispatch(getList(data));
    } catch (error) {
      if (error.message) {
        return rejectWithValue({ hasError: error.message });
      }
    }
  }
);
export const createPostRequest = createAsyncThunk(
  "posts/createPostRequest",
  async (details, { dispatch, rejectWithValue }) => {
    try {
      dispatch(appLoading(true));
      const data = await postsAPI.createPost(details);
      dispatch(showMessage(data));
      dispatch(appLoading(false));
    } catch (error) {
      if (error.message) {
        return rejectWithValue({ hasError: error.message });
      }
    }
  }
);

export const updatePostRequest = createAsyncThunk(
  "posts/updatePostRequest",
  async (details, { dispatch, rejectWithValue }) => {
    try {
      dispatch(appLoading(true));
      const data = await postsAPI.updatePost(details);
      dispatch(showMessage(data));
      dispatch(appLoading(false));
    } catch (error) {
      if (error.message) {
        return rejectWithValue({ hasError: error.message });
      }
    }
  }
);

export const deletePostRequest = createAsyncThunk(
  "posts/deletePostRequest",
  async (details, { dispatch, rejectWithValue }) => {
    try {
      await postsAPI.deletePost(details);
      dispatch(showMessage("Запись успешно удалена"));
    } catch (error) {
      if (error.message) {
        return rejectWithValue({ hasError: error.message });
      }
    }
  }
);
// async thunk request to get single call

export const singlePostRequest = createAsyncThunk(
  "posts/singlePostRequest",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const res = await postsAPI.getSinglePost(id);
      dispatch(singleResponse(res));
    } catch (error) {
      if (error.message) {
        return rejectWithValue({ hasError: error.message });
      }
    }
  }
);

const initialState = {
  posts: [],
  hasError: "",
  message: "",
  currentPage: 1,
  postPerPage: 10,
  response: false,
  single: {},
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getList: (state, action) => {
      state.posts = action.payload;
    },
    showMessage: (state, action) => {
      state.message = action.payload;
    },
    hideMessage: (state) => {
      state.message = "";
    },
    singleResponse: (state, action) => {
      state.single = action.payload;
    },
    setPostNumber: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  getList,
  showMessage,
  hideMessage,
  singleResponse,
  setPostNumber,
} = postSlice.actions;
export default postSlice.reducer;
