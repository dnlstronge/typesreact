import React, { useState, MouseEvent, ChangeEvent } from "react";
import classes from "./AddItem.module.css";
import DataType from "./Models/dataType";

const AddItem: React.FC<{
  addItem: (itemToAdd: string, ...data: DataType[]) => void;
  updateError: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ addItem, updateError }) => {
  const [userInput, setUserInput] = useState("");

  const userInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      updateError(false);
    }
    setUserInput(e.target.value);
  };
  const addItemHandler = () => {
    addItem(userInput);
  };
  return (
    <div className={classes.container}>
      <input
        onChange={userInputHandler}
        type="text"
        className={classes.input}
      ></input>
      <button onClick={addItemHandler} className={classes.btn}>
        Add
      </button>
    </div>
  );
};

export default AddItem;
