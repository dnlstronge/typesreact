import React, { useContext } from "react";
import classes from "./BCPrograms.module.css";
import UC from "./UC/UC";
import PC from "./PC/PC";
import { motion } from "framer-motion";
import CaseWrite from "./CaseWrite/CaseWrite";
import { GlobalContext } from "../../../Context/Context";

const BCPrograms: React.FC<{ showPrograms: boolean }> = (props) => {
  /*animation  */

  return (
    <>
      <UC />
      <PC />
      <CaseWrite />
    </>
  );
};

export default BCPrograms;
