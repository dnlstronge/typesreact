import React from "react"
import classes from "./Header.module.css"

const Header: React.FC = () => {
    return (
        <header className={classes.heading}>
            <p className={classes.title}>Playground App</p>
            <div className={classes.btncontainer}>
                <button className={classes.btn}>Section A</button>
                <button className={classes.btn}>Section B</button>
            </div>
          
        </header>
    )
}
export default Header;