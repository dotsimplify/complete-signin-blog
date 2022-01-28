import React from "react";
import Layout from "../app/layout/Layout";
import DeleteWarning from "../ui/DeleteWarning";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePostRequest } from "../features/postSlice";

const DeletePost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const message = useSelector((state) => state.posts.message);
  const onDelete = (params) => {
    dispatch(deletePostRequest(params));
  };
  return (
    <Layout>
      <DeleteWarning
        onDelete={onDelete}
        id={id}
        link="/dashboard"
        message={message}
      />
    </Layout>
  );
};

export default DeletePost;
