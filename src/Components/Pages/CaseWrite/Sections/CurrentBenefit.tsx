import React from "react"
import classes from "./Relationship.module.css"


const CurrentBenefit: React.FC<{handleBenefits: (e: React.FormEvent<HTMLInputElement>) => void}> = (props) => {
return (
    <section className={classes.section}>
          <label htmlFor="benefit" className={classes.label}>
            Enter main benefit: e.g UC
          </label>
          <input
            onChange={props.handleBenefits}
            id="benefit"
            className={classes.input}
            type="text"
          ></input>
        </section>
)
}

export default CurrentBenefit;