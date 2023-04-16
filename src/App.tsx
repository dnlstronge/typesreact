import React, { useState } from "react";
import Todos from "./Components/Todos";

import classes from "./App.module.css";
import AddItem from "./Components/AddItem";

/*  Goal - create a basic todo app using typescript */

/* figure out id (unique) for delete */

function App() {
  const [items, setItems] = useState([
    {
      id: "walk dog",
      text: "walk dog",
    },
    {
      id: "jumo the shark",
      text: "Jump the shark",
    },
  ]);

  type itemsArray = {id: string, text: string}[]



  const addItem = (itemToAdd: string, ...jobs: { id: string, text: string }[]) => {
    let str: string = itemToAdd;
    setItems((prev: itemsArray) => { 
      return [...prev, {id: str, text: str}]
    
  })

  }
  return (
    <div className={classes.app}>
      <AddItem addItem={addItem} />
      <Todos items={items} />
    </div>
  );
}

export default App;
