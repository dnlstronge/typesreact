import React from "react";
import { Link } from "react-router-dom";
import classes from "./SideBar.module.css";
import Button from "../../UI/Button";

const SideBar: React.FC = () => {
  const dummyhandler = () => {};
  return (
    <div className={classes.sidebar}>
      <Button onClick={dummyhandler} text="Try" />
      <Button onClick={dummyhandler} text="Out" />
      <Button onClick={dummyhandler} text="Custom buttons" />
      <Link to="/sectionone"><Button onClick={dummyhandler} text="Section 1"/></Link>
    </div>
  );
};

export default SideBar;
