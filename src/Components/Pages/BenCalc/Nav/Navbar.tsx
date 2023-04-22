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



const Navbar: React.FC<navBar> = (props, {home, programs, resources, info}) => {

     /* Styling and animation */

  const homeActive = !home ? classes.navnbtn : classes.navbtnactive;
  const programsActive = !programs ? classes.navnbtn : classes.navbtnactive;
  const resourcesActive = !resources ? classes.navnbtn : classes.navbtnactive;
  const infoActive = !info ? classes.navnbtn : classes.navbtnactive;


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
