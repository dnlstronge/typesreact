import React from "react";
import classes from "./Relationship.module.css"

const HeadSec = () => {
    return (
        <section className={classes.sections}>
          <h2 className={classes.heading}>CaseWrite</h2>
          <p className={classes.para}>
            Case note generator: Enter values about household/client and click
            generate to compile a generic case note. Supplementary information
            can be added in the text box at the end of form{" "}
          </p>
        </section>
    )
}

export default HeadSec;