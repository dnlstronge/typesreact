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
  const about = showAbout ? classes.aboutactive : classes.aboutinactive

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
            <ReactPlayer className={classes.player} url={props.gif} controls={true}/>}
            {showAbout && showSub &&
            <p className={about}>{props.contentMain}</p> }

            {showSub && 
            <div className={classes.nav}>
              <button className={classes.navbtn} onClick={showVidHandler}>Video</button>
              <a href={props.url} className={classes.navbtn}>Live demo</a>
              <a href={props.git}className={classes.navbtn}>Github</a>
              <button className={classes.navbtn} onClick={showAboutHandler}>About</button>
            </div>}
            
            <p className={classes.content}>{props.contentMain}</p>
          </section>
     
      </div>
    </section>
  );
};

export default Sections;
