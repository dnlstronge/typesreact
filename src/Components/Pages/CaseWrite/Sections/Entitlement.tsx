import React from "react";
import classes from "./Relationship.module.css";

const Entitlement: React.FC<{
  handleEntitlement: (e: React.FormEvent<HTMLInputElement>) => void;
  handleBetterOff: (e: React.FormEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <section className={classes.sections}>
      <label className={classes.label} htmlFor="ent">
        Entitlement identified
      </label>
      <input
        onChange={props.handleEntitlement}
        className={classes.input}
        type="text"
        id="ent"
      ></input>
      <label className={classes.label} htmlFor="amount">
        Better off (pm)
      </label>
      <input
        onChange={props.handleBetterOff}
        className={classes.input}
        type="number"
      ></input>
    </section>
  );
};
export default Entitlement;
