
import Home from "./Components/Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./Components/Pages/Projects/Projects";

function App() {
 
  
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;
