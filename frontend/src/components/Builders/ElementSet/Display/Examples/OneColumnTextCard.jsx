import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import LargeCard from "../../../Cards/Display/PluginBasedCard";
import Flexer from "../../../../Elements/Layout/Container/Flexer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },
  content: {
    "& h1, & h2, & h3, & h4, & h5, & h6": {
      fontWeight: 600,
      marginBottom: theme.spacing(1),
    },
    "& ul, & ol": {
      paddingLeft: theme.spacing(3),
    },
    "& li": {
      marginBottom: theme.spacing(1),
    },
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
}));

function OneColumnTextCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="h4" className={classes.header}>
            Example Header
          </Typography>
          <Typography variant="h6" className={classes.subheader}>
            Example Subheader
          </Typography>
          <div className={classes.content}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              augue tristique, placerat arcu sit amet, malesuada leo. Integer
              commodo nunc id eros lacinia congue. Fusce vel enim euismod,
              vulputate quam non, commodo velit.
            </Typography>
            <Typography variant="body1">
              Nam auctor ante purus, vitae ultricies dolor tincidunt vel. Sed
              mollis semper quam quis luctus. Fusce quis bibendum velit. Etiam
              quis ligula in quam malesuada facilisis.
            </Typography>
            <Typography variant="h6">Example Subsection Title</Typography>
            <Typography variant="body1">
              Mauris vel suscipit orci. Curabitur sit amet tincidunt velit.
              Vivamus vehicula ullamcorper odio, a dignissim elit. Sed quis elit
              id ex ultrices congue.
            </Typography>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
            <Typography variant="body1">
              Duis lobortis quam a nulla sagittis, vitae hendrerit enim
              bibendum. Fusce sollicitudin lectus eu enim porttitor hendrerit.
              Ut venenatis urna eget consectetur vestibulum. Nam vel metus id
              est commodo laoreet sed sit amet odio.
            </Typography>
            <Typography variant="h6">Another Subsection Title</Typography>
            <Typography variant="body1">
              Nulla posuere nibh a sapien vehicula, at lobortis nunc bibendum.
              In ultrices ante eget ex tristique imperdiet. Morbi id ipsum id
              tortor consectetur bibendum sit amet at mauris. Praesent
              consequat, odio in posuere tristique, elit lorem commodo nibh, id
              maximus nibh augue eget ex.
            </Typography>
          </div>
          <Grid
            item
            xs={12}
            sm={12}
            style={{ display: "flex", justifyContent: "center", marginTop: 32 }}
          >
            <Flexer j="c">
              <LargeCard />
            </Flexer>
            <Flexer j="c">
              <LargeCard />
            </Flexer>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default OneColumnTextCard;
