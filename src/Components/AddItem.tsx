import React, { useState }from "react";
import classes from "./AddItem.module.css"

const AddItem = ({addItem}) => {
  const [userInput, setUserInput] = useState("")



  const userInputHandler = (e) => {
    setUserInput
  }
  const  addItemHandler = () => {

    }   
    return (
        <div className={classes.container}>
            <input className={classes.input}></input>
            <button className={classes.button}></button>
        </div>
    )
}   

export default AddItem;