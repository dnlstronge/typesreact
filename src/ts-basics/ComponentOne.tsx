import React, { useState } from "react";
import classes from "./ComponentOne.module.css"

const ComponentOne = () => {
    const [showPara, setShowPara] = useState(false)

    return (
        <div className={classes.container}>
            <section className={classes.section}>
                <button className={classes.btn}></button>
                <p className={classes.para}></p>
            </section>
        </div>
    )
}

export default ComponentOne;