import React, {useState} from "react";
import Trivial from "../Trivial";
import classes from "./Websites.module.css"

const Websites = () => {
    const [pageOne, setPage] = useState(true)
    const [pageTwo, setPageTwo] = useState(false)
    const [pageThree, setPageThree] = useState(false)


    /* handlers */
    return (
        <>
        <div className={classes.btncontainer}>
            <button className={classes.btn}>1</button>
            <button className={classes.btn}>2</button>
            <button className={classes.btn}>3</button>
        </div>
        <section className={classes.applications}>
            <Trivial />
        </section>
        </>
    )
}

export default Websites;