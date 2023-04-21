
import React from "react"
import classes from "./About.module.css"
import { FaReact } from "react-icons/fa"
import { BsFiletypeCss } from "react-icons/bs"



/* Map for all icons */

const icons= { 

    react: <FaReact className={classes.reacticon}/>,
    css: <BsFiletypeCss className={classes.cssicon}/>,
    html5: "",
    typescript: "",
    javascript: "",

}

/* config: 

(props) - needs content from project data
icons: array of strings (checked with icons map to render icons)

req: react ICONS
*/



const About: React.FC<{content: string}> = (props) => {
   return ( <div>

        {/*content main */}
        <p>{props.content}</p>
        {icons.react}
        {/*content sup */}
        <p>
        </p>
        <section className={classes.icons }></section>
    </div>
   )
}
export default About;