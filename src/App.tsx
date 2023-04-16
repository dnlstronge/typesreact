import React, { useState } from "react";
import Todos from "./Components/Todos";

import classes from "./App.module.css";
import AddItem from "./Components/AddItem";


/*  Goal - create a basic todo app using typescript */




function App() {



  const [jobs, setJobs] = useState(["kill self", "kill typescript"])
const addItem = (itemToAdd: string, ...jobs: string[]) => {
  let str: string = itemToAdd
  setJobs({...jobs, str })
}

  return (
    <div className={classes.app}>
       <AddItem addItem={addItem} />
       <Todos items={jobs} />
    </div>
  );
}

export default App;
