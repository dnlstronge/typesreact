import React from "react";
import Trivial from "../Trivial";
import classes from "./Websites.module.css"

const Websites = () => {
    return (
        <>
        <div className={classes.container}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
        </div>
        <section className={classes.applications}></section>
        </>
    )
}

export default Websites;