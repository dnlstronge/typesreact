import React, { useState } from "react";
import classes from "./Sections.module.css";
import project from "../../../../Models/Projects";
/* Testing (sections.test.tsx) */

/* <Config>

(props)
title: points to title: string
content: points to content: datasource: string


*/

const Sections: React.FC<project> = (props) => {
  const [showSub, setShowSub] = useState(false);
  const showSubHandler = () => {
    setShowSub(!showSub);
  };

  /* animations (p)*/
  const mounted = showSub ? classes.contentfoldertrans : classes.contentfolder;
  const mainimage = showSub ? classes.showimagemain : classes.imagemain;

  return (
    <section className={classes.subsection}>
      <button onClick={showSubHandler} className={classes.btn}>
        {props.title}
      </button>

      <div className={mounted}>
       
          <section>
            <img className={mainimage} src={props.image} alt={props.title}/>
            {props.imageArray.map((image) => {
              return <img className={mainimage} src={image} alt="screen shot of app"/>
            })}
            <p className={classes.content}>{props.contentMain}</p>
          </section>
     
      </div>
    </section>
  );
};

export default Sections;
