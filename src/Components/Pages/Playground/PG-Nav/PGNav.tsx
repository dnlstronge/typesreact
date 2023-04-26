import React from "react";
import classes from "./PGNav.module.css";

const PGNav: React.FC<{onClick: () => void, miscClick: () => void}> = (props) => {
  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <section className={classes.navbtns}>
          <button onClick={props.onClick} className={classes.navbtn}>Applications</button>
          <button onClick={props.miscClick} className={classes.navbtn}>Misc</button>
        </section>
      </nav>
      
    </div>
  );
};

export default PGNav;
