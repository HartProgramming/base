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
import { Select } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { NewsletterStyles1, NewsletterStyles2 } from "./NewsletterStyles";
import { useEffect } from "react";
import AdvancedSnackbar from "../../Elements/Snackbars/Snackbar";

const CustomButton = withStyles({
  label: {
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    fontSize: "0.85rem !important",
  },
})(Button);

export default function NewsletterForm() {
  const column = NewsletterStyles1();
  const row = NewsletterStyles2();
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial");
  const [error, setError] = useState(false);
  const [design, setDesign] = useState(2);
  const [def, setDef] = useState("column");
  const [align, setAlign] = useState(column);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (def === "column") {
      setAlign(column);
      setDesign(1);
    } else if (def === "row") {
      setAlign(row);
      setDesign(2);
    }
  }, [def]);

  const handleChange = (e) => {
    setDef(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
    setMessage("Message Sent");
  };

  const handleClose = () => {
    setOpen(false);
    setMessage(null);
  };

  return (
    <>
      <Box className={align.root}>
        <Container className={align.container}>
          <Typography variant="h2" className={align.heading}>
            Subscribe to our Newsletter
          </Typography>
          <Select value={def} onChange={handleChange}>
            <option value="column">Column</option>
            <option value="row">Row</option>
          </Select>
          {design === 1 && (
            <div>
              <form
                className={align.form}
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
                  className={align.input}
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
                      onClick={handleOpen}
                      variant="contained"
                      color="primary"
                      disabled={state !== "initial"}
                      type={state === "success" ? "button" : "submit"}
                      className={align.submit}
                      endIcon={state === "success" ? <CheckIcon /> : null}
                    >
                      {state === "success" ? "Subscribed" : "Submit"}
                    </CustomButton>
                  </Grid>
                </Grid>
              </form>
              {open && (
                <AdvancedSnackbar
                  open={open}
                  message={message}
                  duration="3500"
                  type="success"
                  onClose={handleClose}
                  position="top-center"
                />
              )}
            </div>
          )}
          {design === 2 && (
            <div>
              <form
                className={align.form}
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
                  className={align.input}
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
                  onClick={handleOpen}
                  variant="contained"
                  color="primary"
                  disabled={state !== "initial"}
                  type={state === "success" ? "button" : "submit"}
                  className={align.submit}
                  endIcon={state === "success" ? <CheckIcon /> : null}
                >
                  {state === "success" ? "Subscribed" : "Submit"}
                </CustomButton>
              </form>
              {open && (
                <AdvancedSnackbar
                  open={open}
                  message={message}
                  duration="3500"
                  type="success"
                  onClose={handleClose}
                  position="top-center"
                />
              )}
            </div>
          )}
          <Typography
            variant="subtitle1"
            className={error ? align.error : align.text}
            align="center"
            gutterBottom
          >
            {error
              ? "Oh no an error occured! 😢 Please try again later."
              : "No spam, just news."}
          </Typography>
        </Container>
      </Box>
    </>
  );
}
