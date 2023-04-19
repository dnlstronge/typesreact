import React from "react";
import classes from ".//Button.module.css";

/* config: 

 props - 
 
 text: text for button (string)
 onClick: needs to point to a function*/

const Button: React.FC<{ onClick: () => void; text: string }> = ({
  onClick,
  text,
}) => {
  return (
    <button onClick={onClick} className={classes.btn}>
      {text}
    </button>
  );
};

export default Button;
