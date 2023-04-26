import { useLocation, Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Projects from "../Components/Pages/Projects/Projects";

/* framer-motion bugfix - "framer-motion/dist/framer-motion" */

import { AnimatePresence } from "framer-motion"
import Playground from "../Components/Pages/Playground/Playground";
import BenCalc from "../Components/Pages/BenCalc/BenCalc";

const AnimationRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location}  key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/bencalc" element = {<BenCalc />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/playground" element={<Playground/>} /> 
      <Route path="/bencalc" element={<BenCalc/>}/>
    </Routes>
    </AnimatePresence>
  );
};

export default AnimationRoutes;
