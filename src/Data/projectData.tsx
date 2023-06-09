import React from "react";
import ReactPlayer from "react-player";

/* Model import (see models for full type) */
import project from "../Models/Projects";

/*Group Task (1001) :  */
import main1001 from "../Assets/GroupTask/1001main.jpg";
import a1001 from "../Assets/GroupTask/1001a.png";
import b1001 from "../Assets/GroupTask/1001b.png";
import c1001 from "../Assets/GroupTask/1001c.png";
import d1001 from "../Assets/GroupTask/1001d.png";
import video from "../Assets/GroupTask/GroupTaskDemo.mp4";
import content1001 from "../Content/Projects/grouptask";

/* icons  */

import { FaReact } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa"
import { IoLogoFirebase } from "react-icons/io5"
import { SiMongodb } from "react-icons/si"



/* color variables */
const colorReact = `rgb(155, 207, 225)` // light blue
const colorCSS = `rgb(220, 125, 220)` // pinkish
const colorTypes = `rgb(66, 163, 195)` // blueish (darker)
const colorJS = `rgb(106, 148, 206)` // bluey
const colorHtml = `rgb(250, 166, 9)` // orange
const colorNode = `rgb(71, 176, 71)` // light green
const colorFireB = ` rgb(248, 184, 65)` // lighter orange
const colorMongo = `rgb(94, 155, 94)` // lighter green


const icons = {
  react: <FaReact key="react" color={colorReact} size="3rem" />,
  css: <BsFiletypeCss key="css" color={colorCSS} size="3rem" />,
  html5: <AiOutlineHtml5 key="html5" color={colorTypes} size="3rem"  />,
  typescript: <TbBrandTypescript key="typescript" color={colorHtml} size="3rem" />,
  javascript: <IoLogoJavascript key="javascript" color={colorJS} size="3rem"  />,
  node: <FaNodeJs key="node" color={colorNode} size="3rem"  />,
  firebase: < IoLogoFirebase key="firebase" color={colorFireB} size="3rem" />,
  mongoDB: <SiMongodb key="mongodb" color={colorMongo} size="3rem"/>
};

/*  for typing config see models */

const projectData: project[] = [
  /*GroupTask */

  {
    uid: 1001,
    title: "GroupTask",
    image: main1001,
    imageArray: [a1001, b1001, c1001, d1001],
    url: "https://grouptaskapp-4eccd.web.app/",
    git: "https://github.com/dnlstronge/groupTask",
    route: "/grouptask",
    isLive: true,
    gif: video,
    contentMain: content1001.main,
    contentSup: content1001.sup,
    techUsed: [
      icons.react,
      icons.css,
      icons.javascript,
      icons.html5,
      icons.firebase
    ],
  },
];

export default projectData;
