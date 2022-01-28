import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";
import SinglePost from "../../pages/SinglePost";
import CreateBlog from "../../pages/CreateBlog";
import UpdatePost from "../../pages/UpdatePost";
import DeletePost from "../../pages/DeletePost";
import Settings from "../../pages/Settings";
import Authentication from "../../pages/Authentication";
import SignupComp from "../../ui/SignupComp";

export default function Routing() {
  //Declaring routes for all apps

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignupComp />} />
      <Route path="/authenticate/:token" element={<Authentication />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/posts/:id"
        element={
          <PrivateRoute>
            <SinglePost />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-blog"
        element={
          <PrivateRoute>
            <CreateBlog />
          </PrivateRoute>
        }
      />
      <Route
        path="/update-post/:id"
        element={
          <PrivateRoute>
            <UpdatePost />
          </PrivateRoute>
        }
      />
      <Route
        path="/delete-post/:id"
        element={
          <PrivateRoute>
            <DeletePost />
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
