import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
const userStyles = makeStyles((theme) => ({
  opacity: {
    animation: `$grow 3s`,
    border: theme.palette.primary.main,
  },
  "@keyframes grow": {
    "0%": {
      height: "0%",
      width: "0%",
      opacity: "0",
    },
    "100%": {
      height: "100%",
      width: "100%",
      opacity: "1",
    },
  },
}));

export default function useOpacityGrow() {
  const classes = userStyles();
  const [opacityGrowClass, setOpacityGrowClass] = useState(null);
  const [opacityGrow, setOpacityGrow] = useState(false);

  useEffect(() => {
    if (opacityGrow === false) {
      console.log("false");
      setOpacityGrowClass(null);
    } else {
      setOpacityGrowClass(classes.opacity);
    }
  }, [opacityGrow]);

  return [opacityGrow, setOpacityGrow, opacityGrowClass];
}
