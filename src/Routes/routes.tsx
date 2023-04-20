import App from "../App";
import SectionOne from "../Components/Pages/Projects/Projects";

/* Routes master, all routes are stored and exported to index.jsx from here */

const routes = [
  { path: "/", element: <App />, id: "home" },
  { path: "/sectionone", element: <SectionOne />, id: "sectionone" },
];

export default routes;
