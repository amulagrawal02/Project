import { React, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

function Register_user() {
  const [data, setData] = useState({
    name: "",
    city: "",
    pin: "",
    email: "",
    password: "",
  });
  const handler = async (e) => {
    e.preventDefault();
    await axios.post("/register/as_user", data);
  };
  return (
    <div className="mt-5">
      <Row>
        <Col lg={3} md={3} sm={2}></Col>
        <Col lg={6} md={6} sm={8}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="City">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                onChange={(e) => {
                  setData({ ...data, city: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Pincode">
              <Form.Label>PIN</Form.Label>
              <Form.Control
                type="text"
                placeholder="PIN"
                onChange={(e) => {
                  setData({ ...data, pin: e.target.value });
                }}
              />
            </Form.Group>
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

export default Register_user;
