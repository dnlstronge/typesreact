import React from "react";
import Todos from "./Components/Todos";
import classes from "./App.module.css";


/*  Goal - create a basic todo app using typescript */


const items: string[] = ["learn typescript", "walk dog"]

function App() {
  return (
    <div className={classes.app}>
       <Todos items={items} />
    </div>
  );
}

export default App;
