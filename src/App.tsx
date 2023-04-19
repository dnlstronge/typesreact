import React, { useState } from "react";
import Todos from "./Components/Todos";
import ComponentToTest from "./Components/Testing/ComponentToTest";
import classes from "./App.module.css";
import AddItem from "./Components/AddItem";
import Generate from "./Components/Generate/Generate";
import NewTodo from "./Components/NewTodo";

/*  Goal - create a basic todo app using typescript */

/* figure out id (unique) for delete */

import DataType from "./Components/Models/dataType"

function App() {

  /* Error */
  const [error, setError] = useState(false) 

  /* Dummy data, created using type class and constructer which
  accepts text parameter */

  const [data, setData] = useState([
    new DataType("walk the cat"),
    new DataType("Bounce off the walls")
  ])

  /* dummy data II */
  
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


  /* updates dummy data II - (redundant) */ 

  const addItem = (itemToAdd: string, ...jobs: { id: string, text: string }[]) => {
    let str: string = itemToAdd;
    setItems((prev: itemsArray) => { 
      return [...prev, {id: str, text: str}]
    
  })
}

  /* updates todo list */

  const newAddItem = (itemToAdd: string, ...data: DataType[]) => {
   if(itemToAdd.length > 0) {
    setError(false)
    let str: string = itemToAdd;
    setData((prev) => {
      return [...prev, new DataType(str)]
    })
   } else {
    setError(true)
    console.log("error please enter a value")
   }
    
  }

  
  return (
    <div className={classes.app}>
      <AddItem addItem={newAddItem} />
      {error && 
      <p className={classes.errormsg}>Task cannot be empty</p>}
      <NewTodo addItem={newAddItem} />
      <Todos items={data} />
      <ComponentToTest />
      <Generate />
    </div>
  );
}

export default App;
