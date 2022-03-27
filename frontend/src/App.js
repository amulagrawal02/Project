import React from "react";

import { useRoutes } from "react-router-dom";
import Register from "./components/auth/Register";
import Home from "./components/Home";
function App() {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/register", element: <Register /> },
  ]);
}

export default App;
