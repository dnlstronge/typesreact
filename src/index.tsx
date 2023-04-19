import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* routes import */
import routes from "./Routes/routes";


const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);
