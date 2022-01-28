// importing axios instance with default bearer token
import { instance } from "../utils/instance";
import axios from "axios";
const base = process.env.REACT_APP_BASE_API;
/* The authAPI object is a wrapper around the axios library. It contains a few methods that are used to
make requests to the backend.

The usernameCheck method takes a username as an argument and makes a request to the backend to check
if the username is available.

The sendMail method takes a user object as an argument and makes a request to the backend to send an
email to the user.

The activateAccount method takes a token as an argument and makes a request to the backend to
activate the account.

The login method takes a user object as an argument and */
export const authAPI = {
  usernameCheck: async (data) => {
    return await axios
      .post(`${base}/available-username`, { username: data })
      .then((res) => res.data);
  },
  sendMail: async (data) => {
    return await axios.post(`${base}/register`, data).then((res) => res.data);
  },
  activateAccount: async (token) => {
    return axios
      .post(`${base}/activate-account`, { token: token })
      .then((res) => res.data);
  },
  login: async (data) => {
    return instance.post("/login", data).then((res) => res.data);
  },
  authMe: () => {
    return axios
      .get(`${process.env.REACT_APP_BASE_API}/getuser`)
      .then((res) => res.data);
  },
  authMe2: () => {
    return instance.get(`/getuser`).then((res) => res.data);
  },
};
