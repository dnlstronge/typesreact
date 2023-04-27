import React, { PropsWithChildren, useContext, useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { GlobalContext } from "../../Context/Context";

const Navbar: React.FC<PropsWithChildren> = ({ children }) => {
  const context = useContext(GlobalContext);

  /* handlers for global state - */

  const setHome = () => {
    context.updateHome();
    // console.log("home fired")
    // console.log(context.homeActive)
  };

  const setPrograms = () => {
    context.updatePrograms();
    // console.log("Progs fired")
    // console.log(context.programsActive)
  };
  const setPlayground = () => {
    context.updatePlayground();
    // console.log("playground fired")
    // console.log(context.playgroundActive)
  };
  const setAbout = () => {
    context.updateAbout();
    // console.log("about fired")
    // console.log(context.aboutActive)
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.navbtns}>
        <Link className={classes.links} to="">
          <NavButton onClick={setHome} text="Home" />
        </Link>
        <Link className={classes.links} to="/projects">
          <NavButton onClick={setPrograms} text="Projects" />
        </Link>
        <Link className={classes.links} to="/playground">
          <NavButton onClick={setPlayground} text="Playground" />
        </Link>
        <Link className={classes.links} to="/bencalc">
          <NavButton onClick={setAbout} text="BenCalc" />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
