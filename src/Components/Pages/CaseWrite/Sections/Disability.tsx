import React from "react";
import classes from "./Relationship.module.css";

const Disability: React.FC<{
  handleDisability: (e: React.FormEvent<HTMLSelectElement>) => void;
}> = (props) => {
  return (
    <section className={classes.section}>
      <label htmlFor="disablilty">Disability</label>
      <select onChange={props.handleDisability}>
        <option value="">None</option>
        <option value="DLA">DLA</option>
        <option value="PIP">PIP</option>
        <option value="PIP Mobility">PIP (mob only)</option>
        <option value="Attendence Allowance">AA</option>
      </select>
    </section>
  );
};

export default Disability;
