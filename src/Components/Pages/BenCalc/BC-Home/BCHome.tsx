import React from "react";
import classes from "./BCHome.module.css"
import bencalcdata from "../../../../Content/BencalcData/bencalccontent";

const BCHome: React.FC<{showHome: boolean}> = (props) => {

    /*animation  */

    const showActive = props.showHome ? classes.containerActive : classes.container

    return (
        <>
        <div className={showActive}>
            {props.showHome && 
            <section className={classes.welcome}>
               
                
                <h4 className={classes.updatesHead}>Welcome to Bencalc</h4>
                <p className={classes.text}>{bencalcdata.p1}</p>
                <h4 className={classes.updatesHead}>Updates...</h4>
                <p className={classes.updatesBox}> 
                    {bencalcdata.updates.map((update) => {
                        return (
                            <p>-{update}</p>
                        )
                    })}
                </p>
            </section>}
        </div>
    
        </>
    )
}

export default BCHome;