import { makeStyles } from "@material-ui/core";

const ReviewStyles1 = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 3, 0, 3),
    margin: theme.spacing(3),
    maxWidth: 1200,
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0),
      margin: theme.spacing(3),
    },
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },
  reviewContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  reviewDate: {
    color: theme.palette.text.secondary,
  },
  reviewRating: {
    marginBottom: theme.spacing(2),
  },
  reviewDivider: {
    margin: `${theme.spacing(2)}px 0`,
  },
  reviewText: {
    color: theme.palette.text.secondary,
  },
  reviewPaper: {
    padding: theme.spacing(2),
    borderRadius: 16,
  },
  reviewGrid: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "center",
    "& > *": {
      flexBasis: "100%",
    },
  },
}));

const ReviewStyles2 = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 3, 0, 3),
    margin: theme.spacing(3),
    maxWidth: 1200,
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0),
      margin: theme.spacing(3),
    },
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },
  reviewContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  reviewDate: {
    color: theme.palette.text.secondary,
  },
  reviewRating: {
    marginBottom: theme.spacing(0),
  },
  reviewDivider: {
    margin: `${theme.spacing(2)}px 0`,
  },
  reviewTitle: {
    color: theme.palette.text.primary
  },
  reviewText: {
    color: theme.palette.text.secondary,
  },
  reviewPaper: {
    padding: theme.spacing(2),
    borderRadius: 16,
  },
  reviewGrid: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "center",
    "& > *": {
      flexBasis: "100%",
    },
  },
}));

export { ReviewStyles1, ReviewStyles2 };
