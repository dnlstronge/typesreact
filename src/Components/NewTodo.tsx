import React from "react";
import classes from "./AddItem.module.css"

const NewTodo = () => {

    const onSubmitHandler = () => {

    }
    return (
        <form className={classes.container}>
            <input type="text" className={classes.input}/>
            <button className={classes.btn}>Add Item</button>
        </form>

    )
}
export default NewTodo;