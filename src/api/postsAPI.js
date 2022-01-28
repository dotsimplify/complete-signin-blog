/* The first line of code imports the axios secondInstance with default bearer token.

The second line instantiates the api calls object for secondInstance calls.

The third line exports the api calls object for secondInstance calls.

The fourth line is a function that returns a promise that gets the posts list.

The fifth line is a function that returns a promise that gets a single post.

The sixth line is a function that returns a promise that creates a post.

The seventh line is a function that returns a promise that updates a post. */
// importing axios secondInstance with default bearer token
import { secondInstance } from "../utils/instance";
// Instantiate api calls object for secondInstance calls
export const postsAPI = {
  getPostsList: async () => {
    return secondInstance.get("/posts").then((res) => res.data);
  },
  getSinglePost: async (id) => {
    return secondInstance.get(`/posts/${id}`).then((res) => res.data);
  },
  createPost: async (data) => {
    return secondInstance.post("/posts", data).then((res) => res.data);
  },
  updatePost: async (data) => {
    const { id, ...rest } = data;
    return secondInstance.put(`/posts/${id}`, rest).then((res) => res.data);
  },
  deletePost: async (id) => {
    return secondInstance.delete(`/posts/${id}`).then((res) => res.data);
  },
};
