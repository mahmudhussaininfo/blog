import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import * as Icons from "react-icons/fa";
import "./Service.css";
import axios from "axios";

const ServicePage = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const serviceApi = async () => {
      try {
        const response = await axios.get(
          "https://blog-im8s.onrender.com/api/allService"
        );
        setServices(response.data.services);
      } catch (error) {
        console.log(error.message);
      }
    };
    serviceApi();
  }, []);

  return (
    <section className="service-section py-5">
      <Container>
        <h2 className="text-center mb-5 text-dark">Our Services</h2>
        <Row>
          {services ? (
            services.map((item, index) => {
              const IconComponent = Icons[item.icon];

              return (
                <Col md={3} sm={6} key={index} className="mb-4">
                  <Card className="service-card text-center">
                    <div className="service-icon mb-3">
                      {IconComponent ? <IconComponent /> : null}
                    </div>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.des}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <Col>
              <p>Loading...</p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ServicePage;
