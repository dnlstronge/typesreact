import React from "react";
import classes from "./FetchingWebsite.module.css"
import img001 from "../../../../Assets/FetchingWebsite/fetch1.png"
import img002 from "../../../../Assets/FetchingWebsite/fetch2.png"
import img003 from "../../../../Assets/FetchingWebsite/fetch3.png"


const imageArray = [
  img001, img002, img003
]


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
            {imageArray.map(img => {
              return <img className={classes.image} id={img} src={img} alt="Screenshot website" />
            })}
          </section>
          <p className={classes.para}>
            Simple website I built to try out fetching data form different apis,
            then manipulating the data in various ways
          </p>
        </section>
      </div>
    )
}

export default FetchingWebsite;