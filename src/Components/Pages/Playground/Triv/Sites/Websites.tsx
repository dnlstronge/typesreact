import React, {useState} from "react";
import Trivial from "../Trivial";
import classes from "./Websites.module.css"

const Websites = () => {
    const [pageOne, setPageOne] = useState(true)
    const [pageTwo, setPageTwo] = useState(false)
    const [pageThree, setPageThree] = useState(false)


    /* handlers */

    const handlePages = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(e.currentTarget.value === "one") {
            setPageOne(true)
            setPageTwo(false)
            setPageThree(false)
        }
        if(e.currentTarget.value === "two") {
            setPageOne(false)
            setPageTwo(true)
            setPageThree(false)
        }
        if(e.currentTarget.value === "three") {
            setPageOne(false)
            setPageTwo(false)
            setPageThree(true)
        }
       
    }

    /**styles */
    return (
        <>
        <div className={classes.btncontainer}>
            <button value="one" className={classes.btn}>1</button>
            <button onClick={handlePages} value="two" className={classes.btn}>2</button>
            <button value="three" className={classes.btn}>3</button>
        </div>
        <section className={classes.applications}>
            <Trivial />
        </section>
        </>
    )
}

export default Websites;