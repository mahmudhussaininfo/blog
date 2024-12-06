import React from "react";
import Layout from "../components/Layout/Layout";
import ServicePage from "../components/ServicePage/ServicePage";
import Team from "../components/Team/Team";

const Service = () => {
  return (
    <>
      <Layout>
        <ServicePage />
        <Team />
      </Layout>
    </>
  );
};

export default Service;
