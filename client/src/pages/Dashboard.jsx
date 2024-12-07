import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab, Button, Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import TeamManager from "../components/TeamManager/TeamManager";
import ServiceManager from "../components/ServiceManager/ServiceManager";
import BlogManager from "../components/BlogManager/BlogManager";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState("blogs");

  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate("/login");
  };

  return (
    <Layout>
      <div className="dashboard-container py-4">
        <Container fluid>
          <Row className="mb-4 align-items-center">
            <Col>
              <h1 className="dashboard-title text-center">Admin Dashboard</h1>
            </Col>
            <Col className="text-end">
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </Col>
          </Row>
          <Tabs
            id="dashboard-tabs"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
            className="custom-tabs mb-4"
            justify
          >
            <Tab eventKey="blogs" title="Manage Blogs">
              <BlogManager />
            </Tab>
            <Tab eventKey="services" title="Manage Services">
              <ServiceManager />
            </Tab>
            <Tab eventKey="team" title="Manage Team">
              <TeamManager />
            </Tab>
          </Tabs>
        </Container>
      </div>
    </Layout>
  );
};

export default Dashboard;
