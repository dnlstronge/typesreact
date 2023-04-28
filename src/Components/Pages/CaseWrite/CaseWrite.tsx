import React from "react"
import classes from "./CaseWrite.module.css"


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
            entitlement: ""
        }

    )
    return (
        <div className={classes.container}>
            <form>
                <label htmlFor="relationships">Relationship Status</label>
                <select id="relationships">
                    <option>Single</option>
                    <option>Couple</option>
                </select>
            </form>
        </div>
    )
}

export default CaseWrite