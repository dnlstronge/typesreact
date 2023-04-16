import React from "react";
import classes from "./Todos.module.css"

/* Should receive todo from props - implement this */

const Todos: React.FC<{items: string[]}> = (props) => {
    return (
        <div className={classes.container}>
            <ul>
               
            </ul>
        </div>
    )
}
export default Todos;