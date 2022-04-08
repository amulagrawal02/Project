import React from "react";

function AfterLogin(props) {
  const { city, email, name, pin, status } = props;
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
    </div>
  );
}

export default AfterLogin;
