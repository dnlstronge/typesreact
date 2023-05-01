import classes from "./Relationship.module.css";

const Supplementary: React.FC<{
  handleSupplementary: (e: React.FormEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <section className={classes.sections}>
      <label className={classes.label} htmlFor="sup">Additional Notes</label>
      <input
        onChange={props.handleSupplementary}
        id="sup"
        className={classes.inputSup}
      ></input>
    </section>
  );
};

export default Supplementary;
