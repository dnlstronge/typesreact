import Navbar from "./Components/Pages/Nav/Navbar";
import AnimationRoutes from "./Routes/AnimationRoutes";
import { Context } from "./Components/Context/Context";

function App() {
  return (
    <>
      <Context.Provider>
        <Navbar />
        <AnimationRoutes />;
      </Context.Provider>
    </>
  );
}

export default App;
