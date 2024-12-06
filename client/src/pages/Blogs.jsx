import React from "react";
import Layout from "../components/Layout/Layout";
import Blog from "../components/Blog/Blog";
import AboutPage from "../components/AboutPage/AboutPage";

const Blogs = () => {
  return (
    <>
      <Layout>
        <AboutPage />
        <Blog />
      </Layout>
    </>
  );
};

export default Blogs;
