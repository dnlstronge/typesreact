import React from "react";
import classes from "./Trivial.module.css";

const Trivial = () => {
  return (
    <>
     

      <div className={classes.container}>
        <section className={classes.section}>
          <a
            className={classes.anchor}
            href="https://moneyman-99322.web.app/login"
            target="blank"
          >
            Finance Tracker
          </a>
          <p className={classes.para}>
            {" "}
            A React finance tracker which uses firebase to handle authentication
            and firestore for users and data. It's a simple crud app which
            allows users to create an account and log expenses.
          </p>
        </section>
      </div>
    </>
  );
};

export default Trivial;
