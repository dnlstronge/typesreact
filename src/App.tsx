import React from "react";
import Todos from "./Components/Todos";
import classes from "./App.module.css";


/*  Goal - create a basic todo app using typescript */


function App() {
  return (
    <div className={classes.app}>
       <Todos />
    </div>
  );
}

export default App;
