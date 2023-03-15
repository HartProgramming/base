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
import axiosInstance from "../../../lib/Axios/axiosInstance";
import useFormValidation from "../../../hooks/useFormValidation";
import Validate from "../../../hooks/Validate";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { useDispatch } from "react-redux";

const CustomButton = withStyles({
  label: {
    fontWeight: "700 !important",
    fontFamily: "Poppins !important",
    fontSize: "0.85rem !important",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.light,
    paddingBottom: theme.spacing(10),
  },
  container: {
    maxWidth: "600px",
    backgroundColor: theme.palette.background.light,
    color: theme.palette.text.dark,
    boxShadow: theme.shadows[10],
    borderRadius: 14,
    padding: theme.spacing(4),
    direction: "column",
  },
  heading: {
    fontFamily: "Poppins",
    fontSize: "2.25rem",
    textAlign: "center",
    fontWeight: 700,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      fontSize: "1.75rem",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  input: {
    margin: theme.spacing(1),
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.text.dark,
      },
      "& fieldset": {
        borderColor: theme.palette.text.dark,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.text.dark,
      },
    },
    "& .MuiFormLabel-root": {
      color: theme.palette.text.dark,
      fontWeight: "700",
      fontSize: "0.9rem",
    },
    "& input": {
      color: theme.palette.text.dark,
    },
  },
  startIcon: {
    paddingRight: 8,
  },
  submit: {
    margin: theme.spacing(1),
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: theme.shadows[3],
      backgroundColor: theme.palette.primary.light,
    },
    "& .MuiButton-startIcon": {
      margin: "0px !important",
    },
  },
  error: {
    color: theme.palette.error.main,
  },
  text: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
  },
}));

export default function NewsletterForm() {
  const classes = useStyles();
  const [state, setState] = useState("initial");
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const submitLogic = (e) => {
    e.preventDefault();
    setError(false);
    setState("submitting");

    axiosInstance
      .post("/subscribe/", values)
      .then((response) => {
        setState("success");
        resetForm({ email: "" });
        dispatch({ type: "ALERT_SUCCESS", message: "Subscribed" });
      })
      .catch((error) => {
        setError(true);
        setState("initial");
        dispatch({ type: "ALERT_FAIL", message: "Subscription Failed" });
      });
  };
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormValidation(formData, Validate, submitLogic);

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h2" className={classes.heading}>
          Subscribe to our Newsletter
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            autoComplete="email"
            name="email"
            variant="outlined"
            notchedOutline
            placeholder="Your Email"
            required
            value={values.email}
            fullWidth
            id="emailaddress"
            label="Email Address"
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
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
                classes={{ startIcon: classes.startIcon }}
                startIcon={<NewspaperIcon />}
                endIcon={state === "success" ? <CheckIcon /> : null}
              ></CustomButton>
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
            </Grid>
          </Grid>
        </form>
        <>
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
        </>
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
  );
}
