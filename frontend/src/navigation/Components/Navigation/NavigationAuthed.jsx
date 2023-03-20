import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import { useDispatch } from "react-redux";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  links: {
    "&:hover": {
      boxShadow: theme.shadows[7],
      backgroundColor: theme.palette.primary.light,
    },
  },
  linkText: {
    "& .MuiTypography-body1": {
      color: "white",
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "0.9rem",
    },
    "& input": {
      color: "white",
    },
  },
  tooltip: {
    backgroundColor: theme.palette.text.secondary,
    color: "#ffffff",
    fontSize: "14px",
  },
}));

export default function NavigationAuthed({ toggleDrawer, handleLogout }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <Tooltip
        title="Update Profile"
        placement="right"
        classes={{ tooltip: classes.tooltip }}
      >
        <ListItem
          button
          className={classes.links}
          component={Link}
          to="/profile"
          onClick={toggleDrawer(false)}
        >
          <ListItemIcon style={{ color: "white" }}>
            <AccountBoxSharpIcon style={{ color: "#ff8c00" }} />
          </ListItemIcon>
          <ListItemText primary="Profile WIP" className={classes.linkText} />
        </ListItem>
      </Tooltip>
      <Tooltip
        title="Logout Now"
        placement="right"
        classes={{ tooltip: classes.tooltip }}
      >
        <ListItem
          button
          className={classes.links}
          component={Link}
          to="/"
          onClick={() => {
            toggleDrawer(false);
            handleLogout();
          }}
        >
          <ListItemIcon style={{ color: "white" }}>
            <ExitToAppSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" className={classes.linkText} />
        </ListItem>
      </Tooltip>
    </>
  );
}
