import React from "react";

import { useRoutes } from "react-router-dom";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import RegisterVender from "./components/auth/Register_vender";
import RegisterUser from "./components/auth/Register_user";
import LoginUser from "./components/auth/Login_user";
// import LoginVender from "./components/auth/Login_vender";
import Login from "./components/auth/login";

function App() {
  console.log("app.js");
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/register/vender", element: <RegisterVender /> },
    { path: "/register/user", element: <RegisterUser /> },
    { path: "/login/user", element: <LoginUser /> },
    // { path: "/login/vender", element: <LoginVender /> },
  ]);
}

export default App;
