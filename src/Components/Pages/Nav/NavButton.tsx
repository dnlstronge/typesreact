import React from "react"
import classes from "./NavButton.module.css"

/* config props: 
    text: button text
    onClick: point to function (must return void)
*/

const NavButton: React.FC<{ onClick: () => void , text: string}> = (props) => {
    return <button onClick={props.onClick} className={classes.btn}>{props.text}</button>
}

export default NavButton;