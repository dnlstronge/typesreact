import React from "react";
import classes from "./Trivial.module.css";
import FetchingWebsite from "./FetchingWebsite";

const Trivial = () => {
  return (
    <>
     

      <div className={classes.container}>
        <FetchingWebsite />
      
      </div>
    </>
  );
};

export default Trivial;
