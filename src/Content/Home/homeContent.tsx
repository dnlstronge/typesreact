import { FaReact } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiPhotoshop } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si"

/* color variables */
const colorReact = `rgb(155, 207, 225)`; // light blue
const colorCSS = `rgb(220, 125, 220)`; // pinkish
const colorTypes = `rgb(66, 163, 195)`; // blueish (darker)
const colorHtml = `rgb(250, 166, 9)`; // orange
const colorNode = `rgb(71, 176, 71)`; // light green
const colorGit = `rgb(211, 140, 8)`; // darker orange
//const colorPs = `rgb(141, 182, 225)` // light blue
const colorJS = `rgb(106, 148, 206)` // bluey
const colorFireB = ` rgb(248, 184, 65)`; // lighter orange
const colorGithub = `rgb(255, 255, 255)`; // white
const colorMongo = `rgb(94, 155, 94)` // lighter green

const icons = {
  react: <FaReact color={colorReact} size="5rem" />,
  css: <BsFiletypeCss color={colorCSS} size="5rem" />,
  html5: <AiOutlineHtml5 color={colorTypes}size="5rem"  />,
  typescript: <TbBrandTypescript color={colorHtml}size="5rem"  />,
  javascript: <IoLogoJavascript color={colorJS} size="5rem" />,
  git: <FaGitAlt color={colorGit} size="5rem" />,
  github: <VscGithub color={colorGithub} size="5rem" />,
  firebase: <IoLogoFirebase color={colorFireB}size="5rem"  />,
  node: <FaNodeJs color={colorNode} size="5rem" />,
  mongoDB: <SiMongodb color={colorMongo} size="5rem" />
};

const homeContent = {
  main: `I am an enthusiastic and hard-working developer who is really passionate about what they do.
   I’m looking for my first professional opportunity in software development. 
   I have already attained a solid knowledge base and competency with vanilla JavaScript and TypeScript
   and have been building relatively complex SPAs with React. I am eager to develop my skills professionally
   and I’m always eager to learn something new tech, and would relish the right opportunity.
   I am currently employed in the public sector and have been leveraging my expertise and knowledge in this area to 
   build helpful applications and tools which I use on a daily basis.
   
  `,
  sup: ``,
  tech: [
    icons.react,
    icons.typescript,
    icons.javascript,
    icons.node,
    icons.git,
    icons.github,
    icons.css,
    icons.html5,
    icons.firebase,
    icons.mongoDB
    

  ],
};

export default homeContent;
