import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import { List, ListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pricingFeatures: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginBottom: theme.spacing(2),
    textAlign: "center",
    minHeight: 400,
  },
  checkIcon: {
    color: theme.palette.primary.dark,
    marginRight: "10px",
  },
  detail: {
    color: theme.palette.text.dark,
  },
}));

export default function CardList({ data, index, classes }) {
  // const classes = useStyles();
  const [planData, setPlanData] = useState(data);

  return (
    <List className={classes.pricingFeatures}>
      {planData.features.map((feature) => (
        <ListItem key={`feature-${index}`} className={classes.detail}>
          <CheckIcon className={classes.checkIcon} />
          {feature.detail}
        </ListItem>
      ))}
    </List>
  );
}
