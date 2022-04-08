import React from "react";
import Login from "./auth/login";
import Register from "./auth/Register";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function BeforeLogin() {
  return (
    <div>
      <div>
        <Link to="./login">
          <Button variant="primary">Login</Button>
        </Link>
        <Link to="./register">
          <Button variant="primary">Register</Button>
        </Link>
      </div>
    </div>
  );
}

export default BeforeLogin;
