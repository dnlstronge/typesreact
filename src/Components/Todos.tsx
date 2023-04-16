import React from "react";
import classes from "./Todos.module.css";

import { PropsWithChildren } from "react";

type itemsingle = {id: string,
                text: string}[]

const Todos: React.FC<PropsWithChildren<{ items: itemsingle }>> = ({
  children,
  items,
}) => {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {items.map((todo) => {

          return (
          <div className={classes.listitemcontainer}>
          <li id={todo.id} className={classes.listItem}>{todo.text}</li>
          <button className={classes.deletebutton}>x</button>
          </div>)
        })}
       
      </ul>
      
    </div>
  );
};
export default Todos;
