import React from "react"
import classes from "./Todo.module.css"



const Todo = ({uid, id, text, delete:deleteItem}: {
    uid: number,
    id: string,
    text: string,
    delete: any
}) => {
    return (
        <div key={uid} id={id} className={classes.listitemcontainer}>
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