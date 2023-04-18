
/* [1] - Create component which generates a number, write tests to insure a number is generated  */
/* [2] -  Create button which changes the class of another element, write a unit test to check this*/


import React from "react"
import classes from "./Generate.module.css"

const Generate = () => {
    return (
        <div className={classes.container}>
            <section className={classes.subsection}>
                <p className={classes.randonumber}></p>
                <button className={classes.btn}></button>
            </section>
            <section className={classes.subsection}>
                <p className={classes.classtochange}>This should change</p>
                <button className={classes.btn}>Change Class</button>
            </section>
        </div>
    )
}
export default Generate