import React from "react";
import classes from "./BCPrograms.module.css"


const BCPrograms: React.FC<{showPrograms: boolean}> = (props) => {

    /*animation  */

    const showActive = props.showPrograms ? classes.containerActive : classes.container

    return (
        <>
        <div className={showActive}>
            <section></section>
        </div>
    
        </>
    )
}

export default BCPrograms;