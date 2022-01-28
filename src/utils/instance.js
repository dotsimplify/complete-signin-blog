import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("entryToken");
export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    Authorization: token,
  },
});

export const secondInstance = axios.create({
  baseURL: process.env.REACT_APP_USER_LIST_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
