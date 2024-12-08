import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Blog.css"; // Optional for custom styling
import axios from "axios";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:5050/allBlogs");
      console.log(response.data.blogs);
      setBlog(response.data.blogs);
    };
    getData();
  }, []);

  return (
    <section className="blog-section py-5">
      <Container>
        <h2 className="text-center mb-4">Latest Blog Posts</h2>
        <Row>
          {blog ? (
            blog.map((item, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src={item.photo} alt={item.title} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.content}</Card.Text>
                    <Button className="btn btn-warning" href={item.link}>
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Card.Title>No Data found</Card.Title>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
