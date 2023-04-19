import React, { useState } from "react";
import Todos from "./Components/Todos";
import ComponentToTest from "./Components/Testing/ComponentToTest";
import classes from "./App.module.css";
import AddItem from "./Components/AddItem";
import Generate from "./Components/Generate/Generate";
import NewTodo from "./Components/NewTodo";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";

import DataType from "./Components/Models/dataType";

function App() {
  /* Error (invalid task e.g whitespace) */
  const [error, setError] = useState(false);

  const [show, setShow] = useState({
    show_A: false,
    show_B: false,
  });

  /* Data state */
  const [data, setData] = useState<DataType[]>([]);

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
      <Header show={setShow} />
      <div className={classes.app}>
        <SideBar />
        {show.show_A && (
          <section className={classes.sectionA}>
            <AddItem updateError={setError} addItem={newAddItem} />
            {error && <p className={classes.errormsg}>Task cannot be empty</p>}
            <NewTodo updateError={setError} addItem={newAddItem} />
            <Todos items={data} />
          </section>
        )}

        {show.show_B && (
          <section className={classes.sectionB}>
            <ComponentToTest />
            <Generate />
          </section>
        )}
      </div>
    </>
  );
}

export default App;
