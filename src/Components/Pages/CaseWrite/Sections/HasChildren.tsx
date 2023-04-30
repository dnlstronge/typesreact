import React from "react";
import classes from "./Relationship.module.css";

// prop required should point to relevant handler in parent

const HasChildren: React.FC<{
  handleChildren: (e: React.FormEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <section className={classes.sections}>
      <label className={classes.label} htmlFor="children">
        Enter Number of children
      </label>
      <input
        onChange={props.handleChildren}
        id="children"
        className={classes.input}
        type="number"
      ></input>
    </section>
  );
};

export default HasChildren;
