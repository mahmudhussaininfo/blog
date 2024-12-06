import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "CEO",
      image: "https://via.placeholder.com/200",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Bob Smith",
      role: "Lead Developer",
      image: "https://via.placeholder.com/200",
      linkedin: "/linkedin.com",
      twitter: "#",
    },
    {
      name: "Cathy Brown",
      role: "UI/UX Designer",
      image: "https://via.placeholder.com/200",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Wilson",
      role: "Marketing Head",
      image: "https://via.placeholder.com/200",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section className="team-section py-5">
      <Container>
        <h2 className="text-center mb-4 text-dark">Meet Our Team</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card className="team-card text-center">
                <Card.Img
                  variant="top"
                  src={member.image}
                  alt={member.name}
                  className="team-img"
                />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
