import React from "react";
import classes from "./Trivial.module.css";

const Trivial = () => {
  return (
    <>
      <div className={classes.container}>
        <section className={classes.section}>
          <a
            className={classes.anchor}
            href="https://apifetch-5ea29.web.app/"
            target="blank"
          >
            Fetching website
          </a>
          <p className={classes.para}>
            Simple website I built to try out fetching data form different apis,
            then manipulating the data in various ways
          </p>
        </section>
      </div>

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
