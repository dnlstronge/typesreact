import React from "react";
import iconData from "../../../../Models/dataIcons";
import classes from "./About.module.css";
import { FaReact } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";

import {} from "react-icons/";
import { JsxElement } from "typescript";

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
about: boolean (if about has been clicked to expand)
req: react ICONS


*/




const About: React.FC<{ 
  show: boolean,
  content: string, 
  content2: string,
  icons: JSX.Element[],
  about: boolean }> = (props) => {



/* animations */

const activecontainer = props.about ? classes.containerisactive : classes.container
const activecontent = props.about ? classes.activecontent : classes.inactivecontent

  return (<>
  {props.show && 
    <div className={activecontainer}>
      {/*content main */}
      <p className={activecontent}>{props.content}</p>
      
      {/*content sup */}
      <p className={activecontent}>{props.content2}</p>
      <section className={classes.icons}>
       {props.icons.map((tech) => {
        return tech
       })}
      </section>
    </div>}
    </>
  );
};
export default About;
