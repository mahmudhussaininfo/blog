import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./Contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await axios.post(
        "http://localhost:5050/api/contact",
        formData
      );
      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setStatus("error");
      console.error("Error sending contact form:", error.message);
    }
  };

  return (
    <section className="contact-us-section py-5">
      <Container>
        <Row>
          {/* Map Section */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="mb-4">Find Us</h2>
            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093156!2d-122.41941538468187!3d37.77492977975912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8d2c0001%3A0x4b8dfd07a2e7b20c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1690753781839!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>

          {/* Contact Form Section */}
          <Col md={6}>
            <h2 className="mb-4">Contact Us</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Submit
              </Button>
              {status === "loading" && (
                <p className="text-info mt-3">Sending...</p>
              )}
              {status === "success" && (
                <p className="text-success mt-3">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-danger mt-3">
                  Failed to send the message. Please try again.
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
