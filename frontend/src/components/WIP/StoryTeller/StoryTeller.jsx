import React, { useState } from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { StoryTellerStyles1} from "./StoryTellerStyles";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.light,
  },
  paper: {
    backgroundColor: theme.palette.background.light,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: theme.spacing(2),
  },
}));

const StoryTeller = () => {

  useEffect(() => {
    if (image === "no-scale") {
      setImgScale(classes.image);
    } else if (image === "scale") {
      setImgScale(classes.imageScale);
      console.log(imgScale);
    }
    if(textAlign === 'center'){
      setAlign(classes.textCenter)
    }else if(textAlign === 'left'){
      console.log(textAlign)
      setAlign(classes.textLeft)
    }
  }, [imgScale, align]);

  return (
    <>
        <div className={classes.root}>
          <Typography variant="h4" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className={classes.paper}>
                <div className={classes.imageContainer}>
                  <img
                    className={imgScale}
                    src="https://source.unsplash.com/300x300/?service"
                    alt="Service 2"
                  />
                </div>
                <div className={classes.textContainer}>
                  <Typography className={align} variant="h5" gutterBottom>
                    Step 1: Introduction
                  </Typography>
                  <Typography className={align} variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className={classes.paper}>
                <div className={classes.imageContainer}>
                  <img
                    className={imgScale}
                    src="https://source.unsplash.com/300x300/?service"
                    alt="Service 2"
                  />
                </div>
                <div className={classes.textContainer}>
                  <Typography className={align} variant="h5" gutterBottom>
                    Step 1: Introduction
                  </Typography>
                  <Typography className={align} variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className={classes.paper}>
                <div className={classes.imageContainer}>
                  <img
                    className={imgScale}
                    src="https://source.unsplash.com/300x300/?service"
                    alt="Service 2"
                  />
                </div>
                <div className={classes.textContainer}>
                  <Typography className={align} variant="h5" gutterBottom>
                    Step 1: Introduction
                  </Typography>
                  <Typography className={align} variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className={classes.paper}>
                <div className={classes.imageContainer}>
                  <img
                    className={imgScale}
                    src="https://source.unsplash.com/300x300/?service"
                    alt="Service 2"
                  />
                </div>
                <div className={classes.textContainer}>
                  <Typography className={align} variant="h5" gutterBottom>
                    Step 1: Introduction
                  </Typography>
                  <Typography className={align} variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
    </>
  );
  }

export default StoryTeller;
