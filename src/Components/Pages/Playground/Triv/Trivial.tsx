import React from "react";
import classes from "./Trivial.module.css";
import FetchingWebsite from "./FetchingWebsite";
import MoneyMan from "./MoneyMan";

const Trivial = () => {
  return (
    <>
     

      <div className={classes.container}>
        <FetchingWebsite />
        <MoneyMan />
      </div>
    </>
  );
};

export default Trivial;
