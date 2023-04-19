import React from "react";
import ComponentToTest from "../Testing/ComponentToTest";
import Generate from "../Generate/Generate";
import classes from "./SectionB.module.css"
import { sectionBpara } from "../../Content/paragraphs";


const SectionB = () => {
    return (
        <section className={classes.sectionB}>
            <div className={classes.countersection}>
                <p className={classes.counterpara}>{sectionBpara.p1}</p>
                <ComponentToTest />
            </div>
            <Generate />
          </section>
    )
}
export default SectionB; 