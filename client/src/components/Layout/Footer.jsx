import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5>Follow Us</h5>
            <p>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved by Mahmud
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a
              href="https://www.facebook.com/mahmudhussainn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/mahmudhussaininfo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmudhussain76/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmudhussain76/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-2"
            >
              <FaLinkedin />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
