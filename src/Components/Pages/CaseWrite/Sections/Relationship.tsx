import React from "react"
import classes from "./Relationship.module.css"

// prop required should point to relevant handler in parent


const Relationship: React.FC<{handleSingle: (e: React.FormEvent<HTMLSelectElement>) => void}> = (props) => {
    return (
        <>
        <section className={classes.sections}>
          <label className={classes.label} htmlFor="relationships">
            Relationship Status
          </label>
          <select
            onChange={props.handleSingle}
            className={classes.select}
            id="relationships"
          >
            <option value="none">--select--</option>
            <option value="single">Single</option>
            <option value="couple">Couple</option>
          </select>
        </section>
        </>
    )
}

export default Relationship;