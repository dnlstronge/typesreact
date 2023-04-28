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

    /* to the right of each state value the number of phrases in the associated 
    array is listed */

    const [client, setClient] = useState(
        {
            single: false, // index 0 - 2
            couple: false, // index 0 - 2
            children: 0, // log actual to string index 0 - 1
            benefits: "", // list benefits IRO - index 0 
            entitlement: "", // identified ent - index 0 - 
            disability: "" // index 0 - 2
        }
    )

    const [caseNote, setCaseNote] = useState("") // state to be used to render paragraph


/* Handlers  */ 


/* submit (update state) */
    const onSumbit = () =>  {
        console.log("Woohoo form submitted")
    }

/* event handlers for inputs */

const handleSingle = (e: React.FormEvent <HTMLSelectElement>) => {
    if(e.currentTarget.value === "single") {
        setClient({...client, single: true, couple: false })
    }

    if(e.currentTarget.value === "couple") {
        setClient({...client, single: false, couple: true  })
    }
    else {
        setClient({...client, single: false, couple: false })
    }
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
                <select onChange={handleSingle} className={classes.select} id="relationships">
                    <option value="Single">Single</option>
                    <option value="Couple">Couple</option>
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