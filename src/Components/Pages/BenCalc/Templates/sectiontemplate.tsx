import React from "react";
import classes from "./BCtemplate.module.css"



/* Config

BCNAME: component name

x: state boolean (used for animation)


*/
const BCNAME: React.FC<{x: boolean}> = (props) => {

    /*animation  */

    const showActive = props.x ? classes.containerActive : classes.container

    return (
        <>
        <div className={showActive}>
            <section></section>
        </div>
    
        </>
    )
}

export default BCNAME;