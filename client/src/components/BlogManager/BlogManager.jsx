import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./BlogManager.css";

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    photo: null,
  });
  const [editBlog, setEditBlog] = useState(null);

  const fetchBlogs = async () => {
    const token = localStorage.getItem("Token");
    const response = await axios.get("http://localhost:5050/api/allBlogs", {
      headers: { Authorization: token },
    });
    setBlogs(response.data.blogs);
  };

  const handleCreate = async () => {
    const token = localStorage.getItem("Token");
    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("content", newBlog.content);
    formData.append("photo", newBlog.photo);

    try {
      await axios.post("http://localhost:5050/api/create-blog", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBlogs();
      setNewBlog({ title: "", content: "", photo: null });
      alert("Blog created successfully!");
    } catch (error) {
      console.error(
        "Error creating blog:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem("Token");
    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("content", newBlog.content);

    if (newBlog.photo) {
      formData.append("photo", newBlog.photo);
    }

    try {
      await axios.put(
        `http://localhost:5050/api/update-blog/${editBlog._id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchBlogs();
      setEditBlog(null);
      setNewBlog({ title: "", content: "", photo: null });
      alert("Blog updated successfully!");
    } catch (error) {
      console.error(
        "Error updating blog:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleEdit = (blog) => {
    setEditBlog(blog);
    setNewBlog({ title: blog.title, content: blog.content, photo: null });
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("Token");
    await axios.delete(`http://localhost:5050/api/delete-blog/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Container fluid className="blog-manager py-4">
      <h2 className="text-center mb-4">Blog Manager</h2>
      <Row>
        <Col md={4}>
          <Card className="p-4 shadow-sm">
            <h4 className="text-center mb-3">
              {editBlog ? "Update Blog" : "Add New Blog"}
            </h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter blog title"
                  value={newBlog.title}
                  onChange={(e) =>
                    setNewBlog({ ...newBlog, title: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter blog content"
                  value={newBlog.content}
                  onChange={(e) =>
                    setNewBlog({ ...newBlog, content: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) =>
                    setNewBlog({ ...newBlog, photo: e.target.files[0] })
                  }
                />
              </Form.Group>
              <Button
                variant={editBlog ? "success" : "primary"}
                className="w-100"
                onClick={editBlog ? handleUpdate : handleCreate}
              >
                {editBlog ? "Update Blog" : "Add Blog"}
              </Button>
            </Form>
          </Card>
        </Col>
        <Col md={8}>
          <Row>
            {blogs.map((blog) => (
              <Col key={blog._id} sm={12} md={6} lg={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={blog.photo} alt={blog.title} />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>
                      {blog.content.length > 100
                        ? `${blog.content.substring(0, 100)}...`
                        : blog.content}
                    </Card.Text>
                    <Button
                      variant="warning"
                      className="w-100 mb-2"
                      onClick={() => handleEdit(blog)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="w-100"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogManager;
