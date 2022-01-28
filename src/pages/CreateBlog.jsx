import React from "react";
import Blog from "../ui/Blog";
import Layout from "../app/layout/Layout";

const CreateBlog = (props) => {
  return (
    <Layout>
      <Blog edit={props.edit} />
    </Layout>
  );
};

export default CreateBlog;
