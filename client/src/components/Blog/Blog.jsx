import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Blog.css"; // Optional for custom styling

const Blog = () => {
  const blogs = [
    {
      title: "Understanding React",
      content:
        "React is a JavaScript library for building user interfaces. Learn how to create reusable components and manage state effectively.",
      image: "https://via.placeholder.com/400x250",
      link: "#",
    },
    {
      title: "Why Bootstrap?",
      content:
        "Bootstrap is a powerful front-end framework that simplifies web design. Discover why developers prefer it for responsive designs.",
      image: "https://via.placeholder.com/400x250",
      link: "#",
    },
    {
      title: "Mastering CSS Grid",
      content:
        "CSS Grid Layout is a two-dimensional layout system for the web. Learn how to create complex layouts with ease.",
      image: "https://via.placeholder.com/400x250",
      link: "#",
    },
  ];

  return (
    <section className="blog-section py-5">
      <Container>
        <h2 className="text-center mb-4">Latest Blog Posts</h2>
        <Row>
          {blogs.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={item.image} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.content}</Card.Text>
                  <Button className="btn btn-warning" href={item.link}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
