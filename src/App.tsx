import React, { useState } from "react";
import Todos from "./Components/Todos";

import classes from "./App.module.css";
import AddItem from "./Components/AddItem";


/*  Goal - create a basic todo app using typescript */


const items: string[] = ["learn typescript", "walk dog"]

const addItem = (itemToAdd: string) => {
  items.push(itemToAdd)
}

function App() {
  const [jobs, setJobs] = useState([
    "learn Typescript",
    "walkdog"
  ])
  return (
    <div className={classes.app}>
       <AddItem addItem={addItem} />
       <Todos items={items} />
    </div>
  );
}

export default App;
