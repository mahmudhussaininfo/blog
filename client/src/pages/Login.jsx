import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout/Layout";

const Login = ({ setAuthToken }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://blog-im8s.onrender.com/api/login",
        credentials
      );
      const { token } = response.data;
      setAuthToken(token);
      localStorage.setItem("Token", token);
      setErrorMessage(""); // Clear any previous error message
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <Layout>
      <div className="login-container">
        <Container className="d-flex justify-content-center align-items-center vh-100">
          <Row className="w-100">
            <Col md={6} className="mx-auto">
              <div className="login-box p-4 shadow rounded">
                <h2 className="text-center mb-4">Admin Login</h2>
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Login
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Login;
