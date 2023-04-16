import React from "react";
import Todos from "./Components/Todos";
import classes from "./App.module.css";
import AddItem from "./Components/AddItem";


/*  Goal - create a basic todo app using typescript */


const items: string[] = ["learn typescript", "walk dog"]

const addItem = (itemToAdd: string) => {
  items.push(itemToAdd)
}

function App() {
  return (
    <div className={classes.app}>
       <Todos items={items} />
       <AddItem addItem={addItem} />
    </div>
  );
}

export default App;
