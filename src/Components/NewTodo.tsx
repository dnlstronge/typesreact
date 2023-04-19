import React, { FormEvent, useRef } from "react";
import classes from "./AddItem.module.css";

const NewTodo: React.FC<{addItem: any}> = (props) => {
  const userInput = useRef<HTMLInputElement>(null);

  /* handler */

  const onSubmitHandler = (e: FormEvent) => {
    const inputText = userInput.current!.value
    e.preventDefault();
    props.addItem(inputText);

  };


  return (
    <form onSubmit={onSubmitHandler} className={classes.container}>
      
      <input
        ref={userInput}
        id="inputtitem"
        type="text"
        className={classes.input}
      />
      <button className={classes.btn}>Add Item</button>
    </form>
  );
};
export default NewTodo;
