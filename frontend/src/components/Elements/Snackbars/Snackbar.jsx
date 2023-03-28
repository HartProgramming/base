import React, { useState } from "react";
import {
  Snackbar,
  IconButton,
  makeStyles,
  useTheme,
  Grow,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiSnackbarContent-root": {
      maxWidth: 340,
      minWidth: 340,
    },
  },
  success: {
    backgroundColor: "transparent",
    "& .MuiSnackbarContent-root": {
      padding: theme.spacing(0.5, 2, 0.5, 1),

      backgroundColor: theme.palette.success.main,
    },
  },
  error: {
    backgroundColor: "transparent",
    "& .MuiSnackbarContent-root": {
      backgroundColor: theme.palette.error.main,
    },
  },
  info: {
    backgroundColor: "transparent",
    "& .MuiSnackbarContent-root": {
      backgroundColor: theme.palette.info.light,
    },
  },
  warning: {
    backgroundColor: "transparent",
    "& .MuiSnackbarContent-root": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  content: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Roboto",
    fontSize: "0.9rem",
    fontWeight: "600",
    backgroundColor: "transparent",
  },
  action: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

const AdvancedSnackbar = ({
  message,
  type,
  open,
  onClose,
  duration = 3000,
  position = "top-center",
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const iconVariants = {
    success: <CheckCircleIcon className={classes.iconVariant} />,
    error: <ErrorIcon className={classes.iconVariant} />,
    info: <InfoIcon className={classes.iconVariant} />,
    warning: <WarningIcon className={classes.iconVariant} />,
  };

  let anchorOrigin;
  if (position === "top-center") {
    anchorOrigin = {
      vertical: "top",
      horizontal: "center",
    };
  } else if (position === "top-right") {
    anchorOrigin = {
      vertical: "top",
      horizontal: "right",
    };
  } else if (position === "top-left") {
    anchorOrigin = {
      vertical: "top",
      horizontal: "left",
    };
  } else if (position === "bottom-center") {
    anchorOrigin = {
      vertical: "bottom",
      horizontal: "center",
    };
  } else if (position === "bottom-right") {
    anchorOrigin = {
      vertical: "bottom",
      horizontal: "right",
    };
  } else if (position === "bottom-left") {
    anchorOrigin = {
      vertical: "bottom",
      horizontal: "left",
    };
  }

  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={duration}
      TransitionComponent={Grow}
      anchorOrigin={anchorOrigin}
      className={`${classes[type]}`}
      style={{
        marginTop: position.includes("top") ? 42 : 0,
        marginBottom: position.includes("bottom") ? 42 : 0,
      }}
      classes={{ root: classes.root }}
      message={
        <div className={`${classes.content}`}>
          {iconVariants[type]}
          {message}
        </div>
      }
      action={
        <div className={classes.action}>
          <div style={{ flexGrow: 1 }} />
          <IconButton size="small" color="inherit" onClick={onClose}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        </div>
      }
    />
  );
};

export default AdvancedSnackbar;
