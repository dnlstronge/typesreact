import React from "react"
import classes from "./SideBar.module.css"
import Button from "../../UI/Button"


const SideBar: React.FC = () => {

    const dummyhandler = () => {

    }
    return (
    <div className={classes.sidebar}>
        <Button onClick={dummyhandler} text="Try"/>
        <Button onClick={dummyhandler} text="Out"/>
        <Button onClick={dummyhandler} text="Custom buttons"/>
    </div>
    )
}

export default SideBar;