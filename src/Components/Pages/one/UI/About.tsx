
import React from "react"
import classes from "./About.module.css"


/// need hash map for icons? 

const icons = { 

    react: "",
    css: "",
    html5: "",
    typescript: "",
    javascript: "",

}

/* config: 

(props) - needs content from project data

req: react ICONS
*/



const About = () => {
   return ( <div>
        {/*content main */}
        <p></p>

        {/*content sup */}
        <p>
        </p>
        <section className={classes.icons }></section>
    </div>
   )
}
export default About;