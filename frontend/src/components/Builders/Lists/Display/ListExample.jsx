import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StarIcon from "@material-ui/icons/Star";
import Divider from "@material-ui/core/Divider";
import { favExampleData } from "./_listExampleData";
import { Typography } from "@material-ui/core";
import Text from "../../../Elements/Layout/Text/Text";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function PollingListExample() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {favExampleData.map((item) => (
          <div key={item.id}>
            <ListItem button>
              <ListItemText primary={item.title} secondary={item.subtitle} />
              {item.favorite && (
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
              )}
            </ListItem>

            <Divider />
          </div>
        ))}
      </List>

      <Text mt={8} mb={0} a="c" t="h4">
        Add Submit
      </Text>
      <Text mt={8} mb={0} a="c" t="h4">
        Star on Choice
      </Text>
    </div>
  );
}

export default PollingListExample;
