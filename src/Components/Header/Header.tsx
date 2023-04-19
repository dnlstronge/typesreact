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
           return {show_A: true, show_B: false}
        })
    }
    const handleshowB = () => {
        show((prev) => {
            return { show_A: false, show_B: true }
        })
    }
  return (
    <header className={classes.heading}>
      <p className={classes.title}>Playground App</p>
      <div className={classes.btncontainer}>
        <button onClick={handleshowA} className={classes.btn}>Section A</button>
        <button onClick={handleshowB} className={classes.btn}>Section B</button>
      </div>
    </header>
  );
};
export default Header;
