import React, { ChangeEvent, FormEvent, useRef } from "react";
import classes from "./AddItem.module.css";
import DataType from "./Models/dataType";

const NewTodo: React.FC<{
  addItem: (itemToAdd: string, ...data: DataType[]) => void;
  updateError: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const userInput = useRef<HTMLInputElement>(null);

  /* handler */
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length > 0) {
      props.updateError(false);
    }
  };
  const onSubmitHandler = (e: FormEvent) => {
    const inputText = userInput.current!.value.trim();
    if (inputText.length > 0) {
      props.updateError(false);
    }
    e.preventDefault();
    props.addItem(inputText);
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.container}>
      <input
        onChange={changeHandler}
        ref={userInput}
        id="inputtitem"
        type="text"
        className={classes.input}
      />
      <button className={classes.btn}>Add</button>
    </form>
  );
};
export default NewTodo;
