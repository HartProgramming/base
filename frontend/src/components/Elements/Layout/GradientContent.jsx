import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    height: "100vh",
    display: "flex",

    position: "relative",
    overflow: "hidden",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
    zIndex: 1,
  },
  shape: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "50%",
    zIndex: 2,
    clipPath: "polygon(50% 25%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)",
    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  },
  contentWrapper: {
    position: "relative",
    width: "100%",
    zIndex: 3,
  },
}));

const LayeredGradientBackground = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.gradient}></div>
      <div className={classes.shape}></div>
      <div className={classes.contentWrapper}>{children}</div>
    </div>
  );
};

export default LayeredGradientBackground;
