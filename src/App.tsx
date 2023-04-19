import React, { useState } from "react";
import Todos from "./Components/Todos";
import ComponentToTest from "./Components/Testing/ComponentToTest";
import classes from "./App.module.css";
import AddItem from "./Components/AddItem";
import Generate from "./Components/Generate/Generate";
import NewTodo from "./Components/NewTodo";
import Header from "./Components/Header/Header"

/*  Goal - create a basic todo app using typescript */

/* figure out id (unique) for delete */

import DataType from "./Components/Models/dataType";

function App() {
  /* Error */
  const [error, setError] = useState(false);

  /* Dummy data, created using type class and constructer which
  accepts text parameter */

  const [data, setData] = useState<DataType[]>([
   
  ]);

 


  /* updates todo list */

  const newAddItem = (itemToAdd: string, ...data: DataType[]) => {
    if (itemToAdd.length > 0) {
      setError(false);
      let str: string = itemToAdd;
      setData((prev) => {
        return [...prev, new DataType(str)];
      });
    } else {
      setError(true);
    }
  };

  return (
    <>
    <Header />
    <div className={classes.app}>
      <AddItem updateError={setError} addItem={newAddItem} />
      {error && <p className={classes.errormsg}>Task cannot be empty</p>}
      <NewTodo updateError={setError} addItem={newAddItem} />
      <Todos items={data} />
      <ComponentToTest />
      <Generate />
    </div>
    </>
  );
}

export default App;
