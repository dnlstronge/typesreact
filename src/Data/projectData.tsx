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


/* color variables */
const colorReact = `rgb(155, 207, 225)` // light blue
const colorCSS = `rgb(220, 125, 220)` // pinkish
const colorTypes = `rgb(66, 163, 195)` // blueish (darker)
const colorHtml = `rgb(250, 166, 9)` // orange
const colorNode = `rgb(71, 176, 71)` // light green


const icons = {
  react: <FaReact color={colorReact} size="3rem" />,
  css: <BsFiletypeCss color={colorCSS} size="3rem" />,
  html5: <AiOutlineHtml5 color={colorTypes} size="3rem"  />,
  typescript: <TbBrandTypescript color={colorHtml} size="3rem" />,
  javascript: <IoLogoJavascript color={colorNode} size="3rem"  />,
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
    ],
  },
];

export default projectData;
