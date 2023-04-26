import React from "react";
import classes from "./PGNav.module.css";

const PGNav = () => {
  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <section className={classes.navbtns}>
          <button className={classes.navbtn}>Working With Apis</button>
          <button className={classes.navbtn}>Trivial Applications</button>
          <button className={classes.navbtn}>Misc</button>
        </section>
      </nav>
      
    </div>
  );
};

export default PGNav;
