import classes from "./ComponentToTest.module.css"
import React, { useState } from "react"



/* Goal - create a component to write some unit tests for  */

/* [1] - create a simple counter component which increments/deincremnets */


const ComponentToTest = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className={classes.container}>
            <p className={}></p>
        </div>
    )
}
export default ComponentToTest;