import React from "react";
import { Grid, Paper, CardMedia } from "@material-ui/core";
import FAQList from "../../FAQs/examples/FAQList";
import { elementSetExampleStyles } from "./styles/exampleStyles";

function TwoColumnAccordionImage() {
  const classes = elementSetExampleStyles();

  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FAQList />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            image="https://source.unsplash.com/400x401/?random"
            className={classes.image}
            alt="Section Image"
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TwoColumnAccordionImage;
