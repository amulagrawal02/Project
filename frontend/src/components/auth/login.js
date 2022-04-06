import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function login() {
  return (
    <div>
      <Link to="./vender">
        <Button variant="primary">As Vender</Button>
      </Link>
      <Link to="./user">
        <Button variant="primary">As User</Button>
      </Link>
    </div>
  );
}

export default login;
