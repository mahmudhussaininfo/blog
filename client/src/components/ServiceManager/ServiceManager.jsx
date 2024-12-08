import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa"; // Import an icon for the delete button
import "./ServiceManager.css";

const ServiceManager = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    title: "",
    des: "",
    icon: "",
  });
  const [editService, setEditService] = useState(null);

  const fetchServices = async () => {
    const token = localStorage.getItem("Token");
    const response = await axios.get("http://localhost:5050/api/allService", {
      headers: { Authorization: token },
    });
    setServices(response.data.services);
  };

  const handleCreate = async () => {
    const token = localStorage.getItem("Token");
    try {
      await axios.post("http://localhost:5050/api/create-service", newService, {
        headers: { Authorization: token },
      });
      fetchServices();
      setNewService({ title: "", des: "", icon: "" });
      alert("Service added successfully!");
    } catch (error) {
      console.error(
        "Error creating service:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem("Token");

    try {
      await axios.put(
        `http://localhost:5050/api/update-service/${editService._id}`,
        newService,
        {
          headers: { Authorization: token },
        }
      );
      fetchServices();
      setEditService(null);
      setNewService({ title: "", des: "", icon: "" });
      alert("Service updated successfully!");
    } catch (error) {
      console.error(
        "Error updating service:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleEdit = (service) => {
    setEditService(service);
    setNewService({
      title: service.title,
      des: service.des,
      icon: service.icon,
    });
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("Token");
    try {
      await axios.delete(`http://localhost:5050/api/delete-service/${id}`, {
        headers: { Authorization: token },
      });
      fetchServices();
    } catch (error) {
      console.error(
        "Error deleting service:",
        error.response?.data?.message || error.message
      );
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <Container className="service-manager py-4">
      <h2 className="text-center mb-4">Service Manager</h2>

      <Row>
        <Col md={4}>
          <Card className="p-4 shadow-sm">
            <h4 className="text-center mb-3">
              {editService ? "Update Service" : "Add New Service"}
            </h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter service title"
                  value={newService.title}
                  onChange={(e) =>
                    setNewService({ ...newService, title: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter service description"
                  value={newService.des}
                  onChange={(e) =>
                    setNewService({ ...newService, des: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Icon (React Icon Name)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter React icon name"
                  value={newService.icon}
                  onChange={(e) =>
                    setNewService({ ...newService, icon: e.target.value })
                  }
                />
              </Form.Group>

              <Button
                variant={editService ? "success" : "primary"}
                className="w-100"
                onClick={editService ? handleUpdate : handleCreate}
              >
                {editService ? "Update Service" : "Add Service"}
              </Button>
            </Form>
          </Card>
        </Col>

        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h4>Services List</h4>
              <ListGroup>
                {services.map((service) => (
                  <ListGroup.Item
                    key={service._id}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h5>{service.title}</h5>
                      <p>{service.des}</p>
                      <p>
                        <strong>Icon:</strong> {service.icon}
                      </p>
                    </div>
                    <div>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(service)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(service._id)}
                      >
                        <FaTrash />
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceManager;
