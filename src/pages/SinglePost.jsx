import React, { useEffect } from "react";
import Layout from "../app/layout/Layout";
import SinglePostComp from "../ui/SinglePostComp";
import { useDispatch } from "react-redux";
import { singlePostRequest } from "../features/postSlice";
import { useParams } from "react-router-dom";

const SinglePost = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(singlePostRequest(id));
  }, [dispatch, id]);
  return (
    <Layout>
      <SinglePostComp />
    </Layout>
  );
};

export default SinglePost;
