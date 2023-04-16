import React from "react";
import classes from "./Todos.module.css";

import { PropsWithChildren } from "react";

const Todos: React.FC<PropsWithChildren<{ items: string[] }>> = ({
  children,
  items,
}) => {
  return (
    <ul>
      {items.map((todo) => {
        return <li>{todo}</li>;
      })}
    </ul>
  );
};
export default Todos;
