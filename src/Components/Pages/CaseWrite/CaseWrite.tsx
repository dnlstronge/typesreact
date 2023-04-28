import React from "react"
import classes from "./CaseWrite.module.css"
import { useState } from "react"


/* Part of larger bencalc project - 

goal is to generate generic welfare advice casenotes.
Notes returned should be specific to circumstances entered but also vary in wording\


I will acomplish this by holding different phrases in an array and using 
RNG select indexes....

*/



/*helper function */

// config -  length of array as an argument: 
// will return 0 - (x - 1) as index

const generateRandom = (x: number) => {
    let random = Math.floor(Math.random() * x)
    return random;
}
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

    const [caseNote, setCaseNote] = useState("") // state to be used to render paragraph


/* Handlers  */ 

    const onSumbit = () =>  {
        console.log("Woohoo form submitted")
    }

    return (
        <div className={classes.container}>
            <form onSubmit={onSumbit} className={classes.form}>
               
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
                    <label className={classes.label} htmlFor="children">Enter Number of children</label>
                    <input id="children" className={classes.input} type="number"></input>
                </section>
                 {/* Benefit */}
                 <section className={classes.section}>
                    <label htmlFor="benefit" className={classes.label}>Enter main benefit: e.g UC</label>
                    <input id="benefit" className={classes.input} type="text"></input>
                 </section>
                 {/* Disability benefit */}
                 <section className={classes.section}>
                    <label htmlFor="sup">
                        <input id="sup"className={classes.supplementaryText}></input>
                    </label>
                 </section>
                <button>Generate</button>
            </form>
            <div className={classes.caseNote}>
                <p className={classes.para}>{caseNote}</p>
            </div>
        </div>
    )
}

export default CaseWrite