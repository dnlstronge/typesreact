import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SectionOne from "./Components/Pages/Test/SectionOne";
import routes from "./Routes/routes";


const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);
