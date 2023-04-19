import React from "react";
import classes from "./SectionOne.module.css"
import Sections from "./UI/Sections";

const SectionOne = () => {
        
    return (
        <div className={classes.container}>
           <Sections title={"Projects"} />
           <Sections title={"Updates"}/>
           <Sections title={"About"}/>
        </div>

    )
}
export default SectionOne; 