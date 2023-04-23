import React from "react";
import classes from "./BCPrograms.module.css"
import UC from "./UC/UC";


const BCPrograms: React.FC<{showPrograms: boolean}> = (props) => {

    /*animation  */

    const showActive = props.showPrograms ? classes.containerActive : classes.container

    return (
      
        <div className={showActive}>
            {props.showPrograms && 
            <section className={classes.programboxes}>
                <UC />
            </section>}
        </div>
    

    )
}

export default BCPrograms;