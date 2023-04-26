import Navbar from "./Components/Pages/Nav/Navbar";
import AnimationRoutes from "./Routes/AnimationRoutes";
import { GlobalContextProvider } from "./Components/Context/Context"


function App() {


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
