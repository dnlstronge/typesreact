import React from "react";
import classes from "./Todos.module.css"

const Todos = () => {
    return (
        <div className={classes.container}>
            <ul>
                <li>Learn Typescript</li>
                <li>Walk the dog</li>
            </ul>
        </div>
    )
}
export default Todos;