import React from "react";
import classes from "./BCHome.module.css"


const BCHome: React.FC<{showHome: boolean}> = (props) => {

    /*animation  */

    const showActive = props.showHome ? classes.containerActive : classes.container

    return (
        <>
        <div className={showActive}>
            <section className={classes.welcome}>
                <p></p>
                <h4 className={classes.updatesHead}>Updates</h4>
                <p className={classes.updatesBox}></p>
            </section>
        </div>
    
        </>
    )
}

export default BCHome;