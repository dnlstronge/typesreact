import React from "react";
import classes from "./Navbar.module.css";

type navBar = {
  showHome: React.Dispatch<React.SetStateAction<boolean>>;
  showPrograms: React.Dispatch<React.SetStateAction<boolean>>;
  showResources: React.Dispatch<React.SetStateAction<boolean>>;
  showInfo: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<navBar> = () => {
  return (
    <nav className={classes.navbar}>
      <button className={classes.navbtn}>Home</button>
      <div className={classes.navbtns}></div>
      <button className={classes.navbtn}>Programs</button>
      <button className={classes.navbtn}>Resources</button>
      <button className={classes.navbtn}>Info</button>
    </nav>
  );
};

export default Navbar;
