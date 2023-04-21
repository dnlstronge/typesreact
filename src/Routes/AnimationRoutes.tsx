import { useLocation, Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Projects from "../Components/Pages/Projects/Projects";

/* framer-motion bugfix - "framer-motion/dist/framer-motion" */

import { AnimatePresence } from "framer-motion"

const AnimationRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location}  key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </AnimatePresence>
  );
};

export default AnimationRoutes;
