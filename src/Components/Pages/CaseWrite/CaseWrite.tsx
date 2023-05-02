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
import Disability from "./Sections/Disability";
import Entitlement from "./Sections/Entitlement";
import Supplementary from "./Sections/Supplementary";

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
    entitlement: "", // identified ent - index 0 - 2
    betterOff: "", // better off figure index 0 -2
    disability: "", // index 0 - 2
    supplementary: "",
  });

  const [caseNote, setCaseNote] = useState("Initial Text value"); // state to be used to render paragraph
  const [caseNotetwo, setCaseNoteTwo] = useState(""); // 2nd para - disability
  const [caseNoteThree, setCaseNoteThree] = useState(""); // entitlement identified
  const [caseNoteFour, setCaseNoteFour] = useState(""); // better off by
  const [supplementary, setSupplementary] = useState("");

  /* copy casenote function */

  const handleCopy = () => {
    const text = document.getElementById("casenote")!.innerHTML;
    console.log(text);
    const copyContent = async () => {
      try {
        await navigator.clipboard.writeText(text);
        console.log("Content copied to clipboard");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    };
    copyContent();
  };

  /* Handlers  */

  /* submit (update state) */
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //console.log("Woohoo form submitted");
    e.preventDefault();

    if (client.single) {
      //console.log("form has reached IF check");
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

    /* disablity (para 2)  */
    if (client.disability.trim().replace(/ /g, "").length > 0) {
      setCaseNoteTwo(
        `${phrase.disability[generateRandom(3)]} ${client.disability}`
      );
    }
    /*Better off and entitlement paragraph - (para 3 & 4) */
    if (client.entitlement.trim().replace(/ /g, "").length > 0) {
      setCaseNoteThree(
        `${phrase.entitlement[generateRandom(2)]} ${client.entitlement}.`
      );
    }
    if (Number(client.betterOff) > 0) {
      setCaseNoteFour(
        `${phrase.betterOff[generateRandom(2)]}£${client.betterOff}pm`
      );
    }
    if (client.supplementary.trim().replace(/ /g, "").length > 0) {
      setSupplementary(client.supplementary);
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

  const handleEntitlement = (e: React.FormEvent<HTMLInputElement>) => {
    setClient({ ...client, entitlement: e.currentTarget.value });
  };

  const handleBetterOff = (e: React.FormEvent<HTMLInputElement>) => {
    setClient({ ...client, betterOff: e.currentTarget.value });
  };
  const handleSupplementary = (e: React.FormEvent<HTMLInputElement>) => {
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
        <Disability handleDisability={handleDisability} />
        {/* Entitlement identified & better off */}
        <Entitlement
          handleEntitlement={handleEntitlement}
          handleBetterOff={handleBetterOff}
        />
        {/* Supplementary text */}
        <Supplementary handleSupplementary={handleSupplementary} />
        {/* Casenote */}
        <div className={classes.caseNote}>
          <p id="casenote" className={classes.para}>
            {caseNote}
            {caseNotetwo}
            {caseNoteThree}
            {caseNoteFour}
            {supplementary}
          </p>
        </div>
        {/*Submit  */}
        <button className={classes.btn} type="submit">
          Generate
        </button>
        <button onClick={handleCopy} className={classes.btn}>
          copy
        </button>
      </form>
    </div>
  );
};

export default CaseWrite;
