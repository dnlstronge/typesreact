import React from "react";
import classes from "./Todos.module.css";
import DataType from "./Models/dataType";
import { PropsWithChildren } from "react";

type itemsingle = { id: string; text: string }[];

const Todos: React.FC<PropsWithChildren<{ items: DataType[] }>> = ({
  children,
  items,
}) => {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {items.map((todo: DataType, index) => {
          
          const deleteItem = () => {
            const deleteThis = document.getElementById(todo.id);
            if( deleteThis !== null) {
            deleteThis.remove()
            }
          };
          return (
            <div key={index} id={todo.id} className={classes.listitemcontainer}>
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
