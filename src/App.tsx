import Navbar from "./Components/Pages/Nav/Navbar";
import AnimationRoutes from "./Routes/AnimationRoutes";
import GlobalContextProvider from "./Components/Context/Context"
import { useState } from "react";

function App() {

  const [homeState, setHomeState] = useState(false)
  return (
    <>
      <GlobalContextProvider>
        <Navbar />
        <AnimationRoutes />;
      </GlobalContextProvider>
    </>
  );
}

export default App;
