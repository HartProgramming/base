import React, { useState } from "react";
import {
  Box,
  Button,
  makeStyles,
  Typography,
  Container,
  Grid,
  TextField,
  withStyles,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { NewsletterStyles1, NewsletterStyles2 } from "./NewsletterStyles";

const CustomButton = withStyles({
  label: {
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    fontSize: "0.85rem !important",
  },
})(Button);

export default function NewsletterForm() {
  let classes;
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial");
  const [error, setError] = useState(false);
  const [design, setDesign] = useState(2);

  if (design === 1) {
    classes = NewsletterStyles1();
  }else if(design === 2){
    classes = NewsletterStyles2();
  }

  return (
    <>
      {design === 1 && (
        <Box className={classes.root}>
          <Container className={classes.container}>
            <Typography variant="h2" className={classes.heading}>
              Subscribe to our Newsletter
            </Typography>
            <form
              className={classes.form}
              onSubmit={(e) => {
                e.preventDefault();
                setError(false);
                setState("submitting");

                setTimeout(() => {
                  if (email === "fail@example.com") {
                    setError(true);
                    setState("initial");
                    return;
                  }

                  setState("success");
                }, 1000);
              }}
            >
              <TextField
                className={classes.input}
                autoComplete="email"
                name="emailaddress"
                variant="outlined"
                notchedOutline
                placeholder="Your Email"
                required
                fullWidth
                id="emailaddress"
                label="Email Address"
              />
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <CustomButton
                    variant="contained"
                    color="primary"
                    disabled={state !== "initial"}
                    type={state === "success" ? "button" : "submit"}
                    className={classes.submit}
                    endIcon={state === "success" ? <CheckIcon /> : null}
                  >
                    {state === "success" ? "Subscribed" : "Submit"}
                  </CustomButton>
                </Grid>
              </Grid>
            </form>
            <Typography
              variant="subtitle1"
              className={error ? classes.error : classes.text}
              align="center"
              gutterBottom
            >
              {error
                ? "Oh no an error occured! 😢 Please try again later."
                : "No spam, just news."}
            </Typography>
          </Container>
        </Box>
      )}
            {design === 2 && (
        <Box className={classes.root}>
          <Container className={classes.container}>
            <Typography variant="h2" className={classes.heading}>
              Subscribe to our Newsletter
            </Typography>
            <form
              className={classes.form}
              onSubmit={(e) => {
                e.preventDefault();
                setError(false);
                setState("submitting");

                setTimeout(() => {
                  if (email === "fail@example.com") {
                    setError(true);
                    setState("initial");
                    return;
                  }

                  setState("success");
                }, 1000);
              }}
            >
              <TextField
                className={classes.input}
                autoComplete="email"
                name="emailaddress"
                variant="outlined"
                notchedOutline
                placeholder="Your Email"
                required
                fullWidth
                id="emailaddress"
                label="Email Address"
              />
                  <CustomButton
                    variant="contained"
                    color="primary"
                    disabled={state !== "initial"}
                    type={state === "success" ? "button" : "submit"}
                    className={classes.submit}
                    endIcon={state === "success" ? <CheckIcon /> : null}
                  >
                    {state === "success" ? "Subscribed" : "Submit"}
                  </CustomButton>
            </form>
            <Typography
              variant="subtitle1"
              className={error ? classes.error : classes.text}
              align="center"
              gutterBottom
            >
              {error
                ? "Oh no an error occured! 😢 Please try again later."
                : "No spam, just news."}
            </Typography>
          </Container>
        </Box>
      )}
    </>
  );
}
