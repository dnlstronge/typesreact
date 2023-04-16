import React, { useState, MouseEvent, ChangeEvent }from "react";
import classes from "./AddItem.module.css"

const AddItem = ({addItem}:any) => {
  const [userInput, setUserInput] = useState("")



  const userInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }
  const  addItemHandler = () => {
        addItem(userInput)
    }   
    return (
        <div className={classes.container}>
            <input onChange={userInputHandler} type="text" className={classes.input}></input>
            <button onClick={addItemHandler} className={classes.btn}>Add Item</button>
        </div>
    )
}   

export default AddItem;