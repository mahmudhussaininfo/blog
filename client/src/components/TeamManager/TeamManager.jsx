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
  Image,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa"; // Icon for delete action
import "./TeamManager.css";

const TeamManager = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    userName: "",
    role: "",
    photo: null,
  });
  const [editMember, setEditMember] = useState(null);

  const fetchTeamMembers = async () => {
    const token = localStorage.getItem("Token");
    const response = await axios.get(
      "https://blog-im8s.onrender.com/api/allTeams",
      {
        headers: { Authorization: token },
      }
    );
    setTeamMembers(response.data.teams);
  };

  const handleCreate = async () => {
    const token = localStorage.getItem("Token");
    const formData = new FormData();
    formData.append("userName", newMember.userName);
    formData.append("role", newMember.role);
    formData.append("photo", newMember.photo);

    try {
      await axios.post(
        "https://blog-im8s.onrender.com/api/create-team",
        formData,
        {
          headers: { Authorization: token },
        }
      );
      fetchTeamMembers();
      setNewMember({ userName: "", role: "", photo: null });
      alert("Team member added successfully!");
    } catch (error) {
      console.error(
        "Error adding team member:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem("Token");
    const formData = new FormData();
    formData.append("userName", newMember.userName);
    formData.append("role", newMember.role);

    if (newMember.photo) {
      formData.append("photo", newMember.photo);
    }

    try {
      await axios.put(
        `https://blog-im8s.onrender.com/api/update-team/${editMember._id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchTeamMembers();
      setEditMember(null);
      setNewMember({ userName: "", role: "", photo: null });
      alert("Team member updated successfully!");
    } catch (error) {
      console.error(
        "Error updating team member:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleEdit = (member) => {
    setEditMember(member);
    setNewMember({
      userName: member.userName,
      role: member.role,
      photo: null,
    });
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("Token");
    await axios.delete(`https://blog-im8s.onrender.com/api/delete-team/${id}`, {
      headers: { Authorization: token },
    });
    fetchTeamMembers();
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return (
    <Container className="team-manager py-4">
      <h2 className="text-center mb-4">Team Manager</h2>
      <Row>
        <Col md={4}>
          <Card className="p-4 shadow-sm">
            <h4 className="text-center mb-3">
              {editMember ? "Update Team Member" : "Add Team Member"}
            </h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter user name"
                  value={newMember.userName}
                  onChange={(e) =>
                    setNewMember({ ...newMember, userName: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter role"
                  value={newMember.role}
                  onChange={(e) =>
                    setNewMember({ ...newMember, role: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) =>
                    setNewMember({ ...newMember, photo: e.target.files[0] })
                  }
                />
              </Form.Group>
              <Button
                variant={editMember ? "success" : "primary"}
                className="w-100"
                onClick={editMember ? handleUpdate : handleCreate}
              >
                {editMember ? "Update Member" : "Add Member"}
              </Button>
            </Form>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h4>Team Members</h4>
              <ListGroup>
                {teamMembers.map((member) => (
                  <ListGroup.Item
                    key={member._id}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <div className="d-flex align-items-center">
                      <Image
                        src={member.photo}
                        alt={member.userName}
                        roundedCircle
                        className="team-photo me-3"
                      />
                      <div>
                        <h5 className="mb-1">{member.userName}</h5>
                        <p className="mb-0 text-muted">{member.role}</p>
                      </div>
                    </div>
                    <div>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(member)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(member._id)}
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

export default TeamManager;
