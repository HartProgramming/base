import { makeStyles } from "@material-ui/core";

const NewsletterStyles1 = makeStyles((theme) => ({
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
    fontSize: theme.fontSize.h1,
    textAlign: "center",
    fontWeight: 700,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      fontSize: theme.fontSize.h3,
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
      fontSize: theme.fontSize.body2,
    },
    "& input": {
      color: theme.palette.text.dark,
    },
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: theme.shadows[7],
      backgroundColor: theme.palette.primary.dark,
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

const NewsletterStyles2 = makeStyles((theme) => ({
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
    fontSize: theme.fontSize.h1,
    textAlign: "center",
    fontWeight: 700,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      fontSize: theme.fontSize.h3,
    },
  },
  form: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  input: {
    margin: theme.spacing(1),
    width: '65%',
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
      fontSize: theme.fontSize.body2,
    },
    "& input": {
      color: theme.palette.text.dark,
    },
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    padding: theme.spacing(1.4),
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: theme.shadows[7],
      backgroundColor: theme.palette.primary.dark,
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

export {NewsletterStyles1, NewsletterStyles2}