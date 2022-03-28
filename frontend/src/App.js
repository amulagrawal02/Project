import React from "react";

import { useRoutes } from "react-router-dom";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import Vender from "./components/auth/Register_vender";
import User from "./components/auth/Register_user";

function App() {
  console.log("app.js");
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/register", element: <Register /> },
    { path: "/register/vender", element: <Vender /> },
    { path: "/register/user", element: <User /> },
  ]);
}

export default App;
