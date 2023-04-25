import Navbar from "./Components/Pages/Nav/Navbar";
import AnimationRoutes from "./Routes/AnimationRoutes";
import { Context } from "./Components/Context/Context";
import { useState } from "react";

function App() {

  const [homeState, setHomeState] = useState(false)
  return (
    <>
      <Context.Provider value={homeState}>
        <Navbar />
        <AnimationRoutes />;
      </Context.Provider>
    </>
  );
}

export default App;
