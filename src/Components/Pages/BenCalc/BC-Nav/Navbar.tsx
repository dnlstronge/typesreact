import React from "react";
import classes from "./Navbar.module.css";

type navBar = {
  showHome: () => void
  showPrograms: () => void
  showResources: () => void
  showInfo: () => void
  home: boolean;
  programs: boolean;
  resources: boolean;
  info: boolean;
};



const Navbar: React.FC<navBar> = (props) => {

     /* Styling and animation */

  const homeActive = !props.home ? classes.navbtn : classes.btnactive;
  const programsActive = !props.programs ? classes.navbtn : classes.btnactive;
  const resourcesActive = !props.resources ? classes.navbtn : classes.btnactive;
  const infoActive = !props.info ? classes.navbtn : classes.btnactive;


  return (
    <nav className={classes.navbar}>
      <button onClick={props.showHome} className={homeActive}>Home</button>
      <div className={classes.navbtns}></div>
      <button onClick={props.showPrograms} className={programsActive}>Programs</button>
      <button onClick={props.showResources} className={resourcesActive}>Resources</button>
      <button onClick={props.showInfo} className={infoActive}>Info</button>
    </nav>
  );
};

export default Navbar;
