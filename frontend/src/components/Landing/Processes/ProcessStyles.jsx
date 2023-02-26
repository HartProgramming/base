import { makeStyles } from "@material-ui/core";

const ProcessStylesCenter = makeStyles((theme) => ({
    iconContainer: {
      textAlign: "center",
      marginTop: 20,
    },
    icon: {
      fontSize: theme.fontSize.six,
      color: theme.palette.secondary.main,
    },
    heading: {
      fontFamily: "Poppins",
      textAlign: "center",
      fontWeight: 700,
      fontSize: theme.fontSize.h4,
      border: 0,
    },
    description: {
      fontSize: theme.fontSize.body1,
      fontWeight: 400,
      fontFamily: "Roboto",
      textAlign: "center",
      color: theme.palette.text.dark,
      minHeight: 80,
    },
    stepContainer: {
      display: "flex",
      justifyContent: "center",
      maxWidth: 550,
    },
    fadeIn: {
      opacity: 0,
      animation: `$fadeIn 0.5s ease-in-out forwards`,
    },
    "@keyframes fadeIn": {
      from: {
        opacity: 0,
        transform: "translateY(-30px)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  }));

  const ProcessStylesLeft = makeStyles((theme) => ({
    iconContainer: {
      textAlign: "left",
      marginTop: 20,
    },
    icon: {
      fontSize: theme.fontSize.h2,
      color: theme.palette.secondary.main,
    },
    heading: {
      fontFamily: "Poppins",
      textAlign: "left",
      fontWeight: 700,
      fontSize: theme.fontSize.h4,
      border: 0,
    },
    description: {
      fontSize: theme.fontSize.body1,
      fontWeight: 400,
      fontFamily: "Roboto",
      textAlign: "left",
      color: theme.palette.text.dark,
      minHeight: 80,
    },
    stepContainer: {
      display: "flex",
      justifyContent: "left",
      maxWidth: 550,
    },
    fadeIn: {
      opacity: 0,
      animation: `$fadeIn 0.5s ease-in-out forwards`,
    },
    "@keyframes fadeIn": {
      from: {
        opacity: 0,
        transform: "translateY(-30px)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  }));

  export {ProcessStylesCenter, ProcessStylesLeft}