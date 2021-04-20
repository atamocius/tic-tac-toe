import classes from "./square.module.css";

import React from "react";

export default function Square(props) {
  return (
    <button className={classes.root} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
