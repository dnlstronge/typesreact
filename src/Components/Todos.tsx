import React from "react";
import classes from "./Todos.module.css"


import { PropsWithChildren } from "react";
 
const Todos: React.FC<PropsWithChildren<{items: string[]}>> = ({ children, items }) => {
    return (
        <ul>
            {children}
        </ul>
    )
}
export default Todos;