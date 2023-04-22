import React from "react";
import classes from "./Navbar.module.css"
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

/** thinking of seting up context api for this - will see */

const Navbar = () => {


    return (
        <nav className={classes.nav}>
            <div className={classes.navbtns}>
            <Link className={classes.links} to="">
                <NavButton onClick={() => {}} text="Home"/>
            </Link>
            <Link className={classes.links} to="/projects">
                <NavButton onClick={() => {}} text="Projects"/>
            </Link>
            <Link className={classes.links} to="/playground">
                <NavButton onClick={() => {}} text="Playground"/>
            </Link>
            <Link className={classes.links} to="">
                <NavButton onClick={() => {}} text="Contact"/>
            </Link>
           
            </div>
            

        </nav>
    )
}
export default Navbar;