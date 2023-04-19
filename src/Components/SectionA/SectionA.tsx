import React, { useState } from "react";
import classes from "./SectionA.module.css";
import AddItem from "../AddItem";
import NewTodo from "../NewTodo";
import Todos from "../Todos";
import DataType from "../Models/dataType";



const SectionA = () => {

    
  const [error, setError] = useState(false);
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
    <section className={classes.sectionA}>
      <AddItem updateError={setError} addItem={newAddItem} />
      {error && <p className={classes.errormsg}>Task cannot be empty</p>}
      <NewTodo updateError={setError} addItem={newAddItem} />
      <Todos items={data} />
    </section>
  );
};

export default SectionA;
