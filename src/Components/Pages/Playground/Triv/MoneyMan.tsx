import React from "react";
import classes from "./MoneyMan.module.css";
import img001 from "../../../../Assets/MoneyMan/MoneyMan1.png";
import img002 from "../../../../Assets/MoneyMan/MoneyMan2.png";
import img003 from "../../../../Assets/MoneyMan/MoneyMan3.png";

const imageArray = [img001, img002, img003];

const MoneyMan = () => {
  return (
    <section className={classes.section}>
      <a
        className={classes.anchor}
        href="https://moneyman-99322.web.app/login"
        target="blank"
      >
        Finance Tracker
      </a>
      <section className={classes.images}>
        {imageArray.map((img) => {
          return (
            <a target="blank" href="https://moneyman-99322.web.app/login">
              <img
                className={classes.image}
                id={img}
                src={img}
                alt="Screenshot website"
              />
            </a>
          );
        })}
      </section>
      <p className={classes.para}>
        {" "}
        A React finance tracker which uses firebase to handle authentication and
        firestore for users and data. It's a simple crud app which allows users
        to create an account and log expenses.
      </p>
    </section>
  );
};

export default MoneyMan;
