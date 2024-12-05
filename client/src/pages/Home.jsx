import React from "react";
import Layout from "../components/Layout/Layout";
import HomePage from "../components/HomePage/HomePage";
import Blog from "../components/Blog/Blog";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Layout>
        <HomePage />
        <Blog />
        <Testimonial />
      </Layout>
    </>
  );
};

export default Home;
