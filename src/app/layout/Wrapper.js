import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { loginComplete, refreshUserRequest } from "../../features/loginSlice";
import { setAuthorizationToken } from "../../utils/setAuthorization";

const Wrapper = (props) => {
  const dispatch = useDispatch();
  const token = Cookie.get("entryToken");

  useEffect(() => {
    if (!token) {
      setAuthorizationToken(false);
    } else {
      dispatch(loginComplete());
      dispatch(refreshUserRequest());
    }
  }, [dispatch, token]);
  return <>{props.children}</>;
};

export default Wrapper;
