import React from "react";
import classes from "./Todos.module.css";

import { PropsWithChildren } from "react";

const Todos: React.FC<PropsWithChildren<{ items: string[] }>> = ({
  children,
  items,
}) => {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {items.map((todo) => {
          return <li className={classes.listItem}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};
export default Todos;
