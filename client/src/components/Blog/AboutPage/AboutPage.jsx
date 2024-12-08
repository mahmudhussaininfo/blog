import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import about from "../../../public/about.jpg";

const AboutPage = () => {
  return (
    <section className="about-us-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={about}
              alt="About Us"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-4">About Us</h2>
            <p className="lead">
              We are dedicated to delivering exceptional services and creating a
              meaningful impact in the lives of our clients. With a team of
              highly skilled professionals, we bring innovative solutions to
              every project.
            </p>
            <p>
              Our mission is to inspire, empower, and support individuals and
              businesses in achieving their goals. We strive for excellence,
              integrity, and innovation in everything we do.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
