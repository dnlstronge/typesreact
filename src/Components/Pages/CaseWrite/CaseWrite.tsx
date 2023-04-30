import React, { FormEventHandler } from "react";
import classes from "./CaseWrite.module.css";
import { useState } from "react";

/* Part of larger bencalc project - 

goal is to generate generic welfare advice casenotes.
Notes returned should be specific to circumstances entered but also vary in wording\


I will acomplish this by holding different phrases in an array and using 
RNG select indexes....

*/

/* data */

import phrase from "./Data/phrases";
import Relationship from "./Sections/Relationship";
import HasChildren from "./Sections/HasChildren";
import CurrentBenefit from "./Sections/CurrentBenefit";
import HeadSec from "./Sections/HeadSec";

/*helper function */

// config -  length of array as an argument:
// will return 0 - (x - 1) as index

const generateRandom = (x: number) => {
  let random = Math.floor(Math.random() * x);
  return random;
};
const CaseWrite = () => {
  /* to the right of each state value the number of phrases in the associated 
    array is listed */

  const [client, setClient] = useState({
    single: false, // index 0 - 2
    couple: false, // index 0 - 2
    children: "", // log actual to string index 0 - 1
    benefits: "", // list benefits IRO - index 0
    entitlement: "", // identified ent - index 0 -
    disability: "", // index 0 - 2
    supplementary: "",
  });

  const [caseNote, setCaseNote] = useState("Initial Text value"); // state to be used to render paragraph
  const [caseNotetwo, setCaseNoteTwo] = useState(""); // 2nd para - disability

  /* Handlers  */

  /* submit (update state) */
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Woohoo form submitted");
    e.preventDefault();

    console.log(client.single);
    console.log(client.couple);
    console.log(client.children);
    console.log(client.benefits);
    if (client.single) {
      console.log("form has reached IF check");
      setCaseNote(
        `
                ${phrase.single[generateRandom(3)]}. 
                ${phrase.children[generateRandom(2)]}${
          client.children
        } dependents.
                ${phrase.benefits[generateRandom(4)]}${client.benefits}.

                `
      );
    }
    if (client.couple) {
      setCaseNote(
        `
                ${phrase.couple[generateRandom(3)]}. 
                ${phrase.children[generateRandom(2)]}${
          client.children
        } dependents.
                ${phrase.benefits[generateRandom(4)]}${client.benefits}.

                `
      );
    }

    /* disablity (para 2) - Needs added! */
    if (client.disability) {
    }
  };

  /* event handlers for inputs */

  const handleSingle = (e: React.FormEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === "single") {
      return setClient({ ...client, single: true, couple: false });
    }

    if (e.currentTarget.value === "couple") {
      return setClient({ ...client, single: false, couple: true });
    } else {
      return setClient({ ...client, single: false, couple: false });
    }
  };

  const handleChildren = (e: React.FormEvent<HTMLInputElement>) => {
    setClient({ ...client, children: e.currentTarget.value });
  };

  const handleBenefits = (e: React.FormEvent<HTMLInputElement>) => {
    setClient({ ...client, benefits: e.currentTarget.value });
  };

  const handleDisability = (e: React.FormEvent<HTMLSelectElement>) => {
    setClient({ ...client, disability: e.currentTarget.value });
  };

  const handleSupplementary = (e: React.FormEvent<HTMLSelectElement>) => {
    setClient({ ...client, supplementary: e.currentTarget.value });
  };

  return (
    <div className={classes.container}>
      <form onSubmit={onSubmit} className={classes.form}>
        {/*Head section */}
        <HeadSec />
        {/* couple single?  */}
        <Relationship handleSingle={handleSingle} />
        {/* children */}
        <HasChildren handleChildren={handleChildren} />
        {/* Benefit */}
        <CurrentBenefit handleBenefits={handleBenefits} />

        {/* Disability benefit */}

        <section className={classes.section}>
          <label htmlFor="disablilty">Disability</label>
          <select onChange={handleDisability}>
            <option value="">None</option>
            <option value="DLA">DLA</option>
            <option value="PIP">PIP</option>
            <option value="PIP Mobility">PIP (mob only)</option>
            <option value="Attendence Allowance">AA</option>
          </select>
        </section>

        {/* Entitlement identified */}
        <section>
          <label htmlFor="ent">Entitlement identified</label>
          <input type="text" id="ent"></input>
          <label htmlFor="amount">Better off (pm)</label>
          <input type="number"></input>
        </section>

        {/* Supplementary text */}
        <section className={classes.section}>
          <label htmlFor="sup">
            <input id="sup" className={classes.supplementaryText}></input>
          </label>
        </section>
        <button type="submit">Generate</button>
      </form>
      <div className={classes.caseNote}>
        <p className={classes.para}>{caseNote}</p>
        <p className={classes.para}>{}</p>
      </div>
    </div>
  );
};

export default CaseWrite;
