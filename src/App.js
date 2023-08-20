import React from "react";
import {Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css';
import Home from "./page/home";
import Login from "./page/login";

import IceCreamDetails from "./page/ice-cream/ice-cream-details";
import AdminHome from "./page/admin_home";
const router1 = createBrowserRouter([
  {
    path: "home", element: <Home />,

    children: [
      { index:true, element: <IceCreamDetails /> }]
  },
{path:"adminHome", element:<AdminHome/>},
  { path: "login", element: <Login /> },
  { path: "/", element: <Navigate to="/login" /> }

], { basename: "/dreamcompany" });

function App() {
  return (
    <div>
      <RouterProvider router={router1} />
    </div>

  );
}

export default App;
