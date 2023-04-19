import React from "react"
import classes from "./Todo.module.css"
import DataType from "./Models/dataType"


const Todo = ({key, id, text, delete:deleteItem}: {
    key: number,
    id: string,
    text: string,
    delete: any
}) => {
    return (
        <div key={key} id={id} className={classes.listitemcontainer}>
              <li className={classes.listItem}>
                {text}
              </li>
              <button onClick={deleteItem} className={classes.deletebutton}>
                x
              </button>
            </div>
    )
}

export default Todo