import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "./Testimonial.css";

const Testimonial = () => {
  const reviews = [
    {
      name: "John Doe",
      title: "CEO of Company X",
      review:
        "The team did an outstanding job, helping us take our business to the next level. Their professionalism and expertise were second to none.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Jane Smith",
      title: "Founder of Brand Y",
      review:
        "I was impressed with their creative approach to problem-solving. They delivered on time and exceeded expectations. Highly recommend them!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Michael Johnson",
      title: "Marketing Director, Z Corporation",
      review:
        "Fantastic experience! The team provided exceptional support and delivered high-quality results. We will definitely work with them again!",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <section className="client-review-section py-5">
      <Container>
        <h2 className="text-center mb-4 text-dark">What My Clients Say</h2>
        <Carousel>
          {reviews.map((review, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                <Col md={8}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={review.image}
                        alt={review.name}
                        className="client-img mb-3"
                      />
                      <Card.Text className="mb-3">
                        <q>{review.review}</q>
                      </Card.Text>
                      <Card.Footer className="text-muted">
                        <strong>{review.name}</strong> <br />
                        <small>{review.title}</small>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonial;
