import React, { useState } from "react";

import ReactPlayer from "react-player";
import classes from "./Sections.module.css";
import project from "../../../../Models/Projects";
import { Link } from "react-router-dom";
import About from "./About";
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
  const [imageClicked, setImageClicked] = useState(false);

  /* Handlers */
  const showVidHandler = () => {
    const snap = document.getElementById("videobtn")!
    snap.scrollIntoView();
    setShowAbout(false);
    setShowvid(!showVid);
    if(showVid) {
  
    const element = document.getElementById("mediaplayer")!;
    element.style.cssText = `
          height: 428px;
          width: 640px;
          margin-left: 20%;
          margin-right: 20%;
          marfin-bottom: 2rem;
          border: 2rem; solid black;
          transition: all 2s ease-in-out;
          transition: width 2s, height 3s;`;
  } else {
    const element = document.getElementById("mediaplayer")!;
    element.style.cssText = `
          height: 0px;
          width: 640px;
          margin-left: 20%;
          margin-right: 20%;
          margin-bottom: 0;
          border: 2rem; solid black;
          transition: all 1s ease-in-out;
          transition: width 1s, height 2s;`;

  }
}

  const showSubHandler = () => {
    setShowSub(!showSub);
  };
  const showAboutHandler = () => {
    setShowvid(false);
    setShowAbout(!showAbout);
  };

  /* enlarge Image */
  const enlargeHandler = (id: string) => {
    setImageClicked(!imageClicked);
    if (imageClicked) {
      const element = document.getElementById(id)!;
      element.className = classes.showimageenlarged;
      const snapto = document.getElementById("snapto")!;
      snapto.scrollIntoView();
    } else {
      const element = document.getElementById(id)!;
      element.className = classes.showimagemain;
    }
  };

  /* reset */

  /* animations (p) */
  const mounted = showSub ? classes.contentfoldertrans : classes.contentfolder;
  const mainimage = showSub ? classes.showimagemain : classes.imagemain;
  const about = showAbout ? classes.aboutactive : classes.aboutinactive;
  const snapto = showSub ? classes.snaptotrans : classes.snapto;

  return (
    <>
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
          {showSub && (
            <ReactPlayer
              id="mediaplayer"
              height="0"
              width="50%"
              url={props.gif}
              controls={true}
            />
          )}

          {/* Content paragraph */}

          {showSub && (
            <p className={about}>{showAbout ? props.contentMain : ""}</p>
          )}
          <About content={props.contentMain} icons={props.techUsed}/>
          {/* Navagation & links */}

          {showSub && (
            <section className={classes.navbuttons}>
              <div className={classes.nav}>
                <button id="videobtn" className={classes.navbtn} onClick={showVidHandler}>
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
        <section className={snapto} id="snapto"></section>
      </section>
    </>
  );
};

export default Sections;
