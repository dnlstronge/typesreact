import React from "react";
import classes from "./About.module.css";
import { FaReact } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";

import {} from "react-icons/";

/* Map for all icons */

const icons = {
  react: <FaReact className={classes.reacticon} />,
  css: <BsFiletypeCss className={classes.cssicon} />,
  html5: <AiOutlineHtml5 className={classes.htmlicon}/>,
  typescript: <TbBrandTypescript className={classes.tsicon}/>,
  javascript: <IoLogoJavascript className={classes.jsicon} />,
};

/* config: 

(props) - needs content from project data
icons: array of strings (checked with icons map to render icons)

req: react ICONS
*/

const About: React.FC<{ content: string }> = (props) => {
  return (
    <div>
      {/*content main */}
      <p>{props.content}</p>
      {icons.react}
      {/*content sup */}
      <p></p>
      <section className={classes.icons}></section>
    </div>
  );
};
export default About;
