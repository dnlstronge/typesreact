import React from "react";
import classes from "./BCHome.module.css"


const BCHome: React.FC<{showHome: boolean}> = (props) => {

    /*animation  */

    const showActive = props.showHome ? classes.containerActive : classes.container

    return (
        <>
        <div className={showActive}>
            <section></section>
        </div>
    
        </>
    )
}

export default BCHome;