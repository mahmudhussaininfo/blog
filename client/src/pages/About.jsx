import React from "react";
import AboutPage from "./../components/AboutPage/AboutPage";
import Layout from "../components/Layout/Layout";
import Team from "../components/Team/Team";

const About = () => {
  return (
    <>
      <Layout>
        <AboutPage />
        <Team />
      </Layout>
    </>
  );
};

export default About;
