import React, { useState } from "react";
import ReactPlayer from "react-player";
import classes from "./Sections.module.css";
import project from "../../../../Models/Projects";
import { Link } from "react-router-dom";
/* Testing (sections.test.tsx) */

/* <Config>

(props)
title: points to title: string
content: points to content: datasource: string


*/

const Sections: React.FC<project> = (props) => {
  /*local state */
  const [showVid, setShowvid] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [imageClicked, setImageClicked] = useState(false)


  /* Handlers */
  const showVidHandler = () => {
    setShowAbout(false);
    setShowvid(!showVid);
  };

  const showSubHandler = () => {
    setShowSub(!showSub);
  };
  const showAboutHandler = () => {
    setShowvid(false);
    setShowAbout(!showAbout);
  };

  /* enlarge Image */
  const enlargeHandler = (id: string) => {
    setImageClicked(!imageClicked)
   if(imageClicked) {
    const element = document.getElementById(id)!
    element.className = classes.showimageenlarged
    element.scrollIntoView();
   }
   else {
    const element = document.getElementById(id)!
    element.className = classes.showimagemain
   }
  }

  /* reset */

  /* animations (p) */
  const mounted = showSub ? classes.contentfoldertrans : classes.contentfolder;
  const mainimage = showSub ? classes.showimagemain : classes.imagemain;
  const about = showAbout ? classes.aboutactive : classes.aboutinactive;
  

  return (
    <section className={classes.subsection}>
      <button onClick={showSubHandler} className={classes.btn}>
        {props.title}
      </button>
      
      <div className={mounted}>

         {/* images */}
        <section className={classes.imageSection}>
          <img className={mainimage} src={props.image} alt={props.title} />
          {props.imageArray.map((image) => {
            return (
              <img
                onClick={() => {
                  enlargeHandler(image);
                }}
                key={image}
                id={image}
                className={mainimage}
                src={image}
                alt="screenshot of app"
              />
            );
          })}
           </section>

          {/* Media Player */}
          {showVid && showSub && (
            <ReactPlayer
              className={classes.player}
              url={props.gif}
              controls={true}
            />
          )}

          {/* Content paragraph */}
          {showSub && (
            <p className={about}>{showAbout ? props.contentMain : ""}</p>
          )}

          {/* Navagation & links */}

          {showSub && (
            <section className={classes.navbuttons}>
            <div className={classes.nav}>
              <button className={classes.navbtn} onClick={showVidHandler}>
                Video
              </button>
              <button className={classes.navbtn} onClick={showAboutHandler}>
                About
              </button>
              <div className={classes.links}>
                <a
                  className={classes.navanchor}
                  target="blank"
                  href={props.git}
                >
                  Github
                </a>
                <a
                  className={classes.navanchor}
                  target="blank"
                  href={props.url}
                >
                  Live demo
                </a>
              </div>
            </div>
            </section>
          )}
        
      </div>
      </section>
  );
};

export default Sections;
