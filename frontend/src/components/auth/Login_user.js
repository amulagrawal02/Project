import { React, useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import axios from "axios";

function Login_user() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handler = async (e) => {
    e.preventDefault();
    const response = (
      await axios.post("http://localhost:8000/login/as_user", data)
    ).data;
    if (response.token) {
      localStorage.setItem("token", response.token);
      window.location.href = "/";
    } else {
      alert("check your email and password");
    }
  };
  return (
    <div className="mt-5">
      <Row>
        <Col lg={3} md={3} sm={2}></Col>
        <Col lg={6} md={6} sm={8}>
          <Form>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handler}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={3} md={3} sm={2}></Col>
      </Row>
    </div>
  );
}

export default Login_user;
