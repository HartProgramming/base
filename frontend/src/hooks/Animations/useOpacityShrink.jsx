import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
const userStyles = makeStyles((theme) => ({
  opacity: {
    animation: `$opacity 3s`,
    border: theme.palette.primary.main,
  },
  "@keyframes opacity": {
    "0%": {
      height: "100%",
      width: "100%",
      opacity: "1",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: '50%'
    },
    "100%": {
      display: "none",
      opacity: "0",
      height: "0%",
      width: "0%",
      alignItems: "center",
      borderRadius: '50%'
    },
  },
}));

export default function useOpacityShrink() {
  const classes = userStyles();
  const [opacityShrinkClass, setOpacityShrinkClass] = useState();
  const [opacityShrink, setOpacityShrink] = useState(false);

  useEffect(() => {
    if (opacityShrink === false) {
      console.log("false");
      setOpacityShrinkClass();
    } else {
      console.log(opacityShrink);
        setOpacityShrinkClass(classes.opacity);
        console.log(opacityShrinkClass);
        console.log(classes.opacity);
    }
  }, [opacityShrink, opacityShrinkClass]);

  return [opacityShrink, setOpacityShrink, opacityShrinkClass];
}
