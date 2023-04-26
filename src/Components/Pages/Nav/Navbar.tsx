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
  };

  const setPrograms = () => {
    context.updatePrograms();
  };
  const setPlayground = () => {
    context.updatePlayground();
  };
  const setAbout = () => {
    context.updateAbout();
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
          <NavButton onClick={() => {}} text="Playground" />
        </Link>
        <Link className={classes.links} to="">
          <NavButton onClick={() => {}} text="Contact" />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
