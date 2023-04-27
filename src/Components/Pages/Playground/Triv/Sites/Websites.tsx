import React, {useState} from "react";
import Trivial from "../Trivial";
import classes from "./Websites.module.css"

const Websites = () => {
    const [pageOne, setPageOne] = useState(true)
    const [pageTwo, setPageTwo] = useState(false)
    const [pageThree, setPageThree] = useState(false)


    /* handlers */

    const handlePages = (e: React.MouseEvent<HTMLButtonElement>) => {
        
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

    /* styles */

    const pageoneStyle = pageOne ? classes.btnActive : classes.btn

    const pageTwoStyle = pageTwo ? classes.btnActive : classes.btn

    const pageThreeStyle = pageThree ? classes.btnActive : classes.btn

    return (
        <>
        <div className={classes.btncontainer}>
            <button onClick={handlePages} value="one" className={pageoneStyle}>1</button>
            <button onClick={handlePages} value="two" className={pageTwoStyle}>2</button>
            <button onClick={handlePages} value="three" className={pageThreeStyle}>3</button>
        </div>
        <section className={classes.applications}>
            {pageOne && 
            <Trivial />}
            
        </section>
        </>
    )
}

export default Websites;