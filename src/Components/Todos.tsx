import React from "react";
import classes from "./Todos.module.css";

import { PropsWithChildren } from "react";

type itemsingle = { id: string; text: string }[];

const Todos: React.FC<PropsWithChildren<{ items: itemsingle }>> = ({
  children,
  items,
}) => {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {items.map((todo, index) => {
          const uid = index.toString()
          console.log(uid)
          const deleteItem = () => {
            const deleteThis: any = document.getElementById(uid);
            deleteThis.remove();
          };
          return (
            <div key={index} id={uid} className={classes.listitemcontainer}>
              <li className={classes.listItem}>
                {todo.text}
              </li>
              <button onClick={deleteItem} className={classes.deletebutton}>
                x
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Todos;
