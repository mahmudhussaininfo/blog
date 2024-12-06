import React from "react";
import Layout from "../components/Layout/Layout";
import ContactPage from "../components/ContactPage/ContactPage";
import AboutPage from "../components/AboutPage/AboutPage";

const Contact = () => {
  return (
    <>
      <Layout>
        <AboutPage />
        <ContactPage />
      </Layout>
    </>
  );
};

export default Contact;
