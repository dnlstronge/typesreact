import React, { useState } from "react";
import ReactPlayer from 'react-player'
import classes from "./Sections.module.css";
import project from "../../../../Models/Projects";
/* Testing (sections.test.tsx) */

/* <Config>

(props)
title: points to title: string
content: points to content: datasource: string


*/

const Sections: React.FC<project> = (props) => {

  /*local state */
  const [showVid, setShowvid] = useState(false)
  const [showSub, setShowSub] = useState(false);
  const [showAbout, setShowAbout] = useState(false)

  /* Handlers */
  const showVidHandler = () => {
    setShowAbout(false)
    setShowvid(!showVid)
  }

  const showSubHandler = () => {
    setShowSub(!showSub);
  };
  const showAboutHandler = () => {
    setShowvid(false)
    setShowAbout(!showAbout)
  }

  /* animations (p) */
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
            {showVid && showSub &&
            <ReactPlayer url={props.gif} controls={true}/>}
            {showSub && 
            <div className={classes.nav}>
              <button className={classes.navbtn} onClick={showVidHandler}>Video</button>
              <button className={classes.navbtn}>Live demo</button>
              <button className={classes.navbtn}>Github</button>
              <button className={classes.navbtn}>About</button>
            </div>}
            
            <p className={classes.content}>{props.contentMain}</p>
          </section>
     
      </div>
    </section>
  );
};

export default Sections;
