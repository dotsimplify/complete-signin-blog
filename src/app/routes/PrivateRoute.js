/**
 * If the user is logged in, render the component. Otherwise, redirect to the home page.
 * @param props - the props that were passed to the component
 * @returns The children of the PrivateRoute component.
 */
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = (props) => {
  const isLoggedIn = useSelector((state) => state.user.isAuthenticated);

  return isLoggedIn ? props.children : <Navigate to="/" />;
};

export default PrivateRoute;
