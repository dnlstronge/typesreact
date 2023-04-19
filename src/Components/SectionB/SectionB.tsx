import React from "react";
import ComponentToTest from "../../Components/Testing/ComponentTest/ComponentToTest";
import Generate from "../Generate/Generate";
import classes from "./SectionB.module.css"
import { sectionBpara } from "../../Content/paragraphs";


const SectionB = () => {
    return (
        <section className={classes.sectionB}>
            <div className={classes.countersection}>
                <p className={classes.counterpara}>{sectionBpara.p1}</p>
                <ComponentToTest />
                <p className={classes.counterpara}>{sectionBpara.p2}</p>
            </div>
            <Generate />
          </section>
    )
}
export default SectionB; 