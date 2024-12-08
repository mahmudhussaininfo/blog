import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Team.css";
import axios from "axios";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await axios.get(
        "https://blog-im8s.onrender.com/api/allTeams"
      );
      setTeam(response.data.teams);
    };
    fetchTeam();
  }, []);
  return (
    <section className="team-section py-5">
      <Container>
        <h2 className="text-center mb-4 text-dark">Meet Our Team</h2>
        <Row>
          {team
            ? team.map((member, index) => (
                <Col md={3} sm={6} key={index} className="mb-4">
                  <Card className="team-card text-center">
                    <Card.Img
                      variant="top"
                      src={member.photo}
                      className="team-img"
                    />
                    <Card.Body>
                      <Card.Title>{member.userName}</Card.Title>
                      <Card.Text>{member.role}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : "no data found"}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
