import classes from "./Relationship.module.css";

const Supplementary: React.FC<{
  handleSupplementary: (e: React.FormEvent<HTMLInputElement>) => void;
}> = () => {
  return (
    <section className={classes.section}>
      <label className={classes.label} htmlFor="sup"></label>
      <input
        onChange={handleSupplementary}
        id="sup"
        className={classes.inputSup}
      ></input>
    </section>
  );
};

export default Supplementary;
