import React from "react";
import classes from "./BCResources.module.css"




const BCResources: React.FC<{showResources: boolean}> = (props) => {

    /*animation  */

    const showActive = props.showResources ? classes.containerActive : classes.container

    return (
        <>
        <div className={showActive}>
            <section></section>
        </div>
    
        </>
    )
}

export default BCResources;