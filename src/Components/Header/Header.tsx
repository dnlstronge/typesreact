import React from "react";
import classes from "./Header.module.css";

const Header: React.FC<{
  show: React.Dispatch<
    React.SetStateAction<{
      show_A: boolean;
      show_B: boolean;
    }>
  >;
}> = ({ show }) => {

    /* handlers */ 

    const handleshowA = () => {
        show((prev) => {
           return {...prev, show_A: true}
        })
    }
    const handleshowB = () => {

    }
  return (
    <header className={classes.heading}>
      <p className={classes.title}>Playground App</p>
      <div className={classes.btncontainer}>
        <button className={classes.btn}>Section A</button>
        <button className={classes.btn}>Section B</button>
      </div>
    </header>
  );
};
export default Header;
