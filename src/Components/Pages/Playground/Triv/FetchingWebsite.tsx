import React from "react";
import classes from "./FetchingWebsite.module.css";
import img001 from "../../../../Assets/FetchingWebsite/fetch1.png";
import img002 from "../../../../Assets/FetchingWebsite/fetch2.png";
import img003 from "../../../../Assets/FetchingWebsite/fetch3.png";

const imageArray = [img001, img002, img003];

const FetchingWebsite = () => {
  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <a
          className={classes.anchor}
          href="https://apifetch-5ea29.web.app/"
          target="blank"
        >
          Fetching website
        </a>
        <section className={classes.images}>
          {imageArray.map((img) => {
            return (
              <a key={img} target="blank" href="https://apifetch-5ea29.web.app/">
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
          Simple website I built to try out fetching data form different apis,
          then manipulating the data in various ways
        </p>
      </section>
      <a className={classes.anchorgit} href="https://github.com/dnlstronge/fetchapp">Github Repo</a>
    </div>
  );
};

export default FetchingWebsite;
