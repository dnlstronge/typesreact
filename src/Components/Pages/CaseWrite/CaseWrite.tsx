import React from "react"
import classes from "./CaseWrite.module.css"
import { useState } from "react"


/* Part of larger bencalc project - 

goal is to generate generic welfare advice casenotes.
Notes returned should be specific to circumstances entered but also vary in wording\

*/

const CaseWrite = () => {

    const [client, setclient] = useState(
        {
            single: "single adult",
            couple: "couple",
            children: 0,
            benefit: "",
            entitlement: "",
            disability: ""
        }

    )
    return (
        <div className={classes.container}>
            <form className={classes.form}>
               
                <section className={classes.sections}>
                <h2>CaseWrite</h2>
                 <p className={classes.para}>Case note generator: Enter values about household/client and 
                 click generate to compile a generic case note. Supplementary information can be 
                 added in the text box at the end of form </p> 
                </section>
                {/* couple single?  */}
                <section className={classes.sections}>
                <label className={classes.label} htmlFor="relationships">Relationship Status</label>
                <select className={classes.select} id="relationships">
                    <option>Single</option>
                    <option>Couple</option>
                </select>
                </section>
                 {/* children */}
                <section className={classes.sections}>
                    <label className={classes.label} htmlFor="children"></label>
                    <input className={classes.input} type="number"></input>
                </section>
                 {/* Benefit */}
                 <section className={classes.section}>
                    <label className={classes.label}></label>
                    <input className={classes.input} type="text"></input>
                 </section>
                 {/* Disability benefit */}

            </form>
        </div>
    )
}

export default CaseWrite