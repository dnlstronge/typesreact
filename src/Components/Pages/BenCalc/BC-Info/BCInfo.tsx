import React from "react";
import classes from "./BCInfo.module.css"



const BCInfo: React.FC<{showInfo: boolean}> = (props) => {

    /*animation  */

    const showActive = props.showInfo ? classes.containerActive : classes.container

    return (
        <>
        <div className={showActive}>
            <section></section>
        </div>
    
        </>
    )
}

export default BCInfo;