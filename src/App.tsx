import React, { useState } from "react";
import classes from "./App.module.css";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import SectionB from "./Components/SectionB/SectionB";
import SectionA from "./Components/SectionA/SectionA";

function App() {
  const [show, setShow] = useState({
    show_A: false,
    show_B: false,
  });

  return (
    <>
      <Header show={setShow} />
      <div className={classes.app}>
        <SideBar />
        {show.show_A && <SectionA />}
        {show.show_B && <SectionB />}
      </div>
    </>
  );
}

export default App;
