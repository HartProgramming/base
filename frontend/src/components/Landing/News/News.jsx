import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TitleBlock from "../../Elements/TextBlocks/TitleBlock/TitleBlock";
import { Paper, useMediaQuery } from "@material-ui/core";
import axiosInstance from "../../../lib/Axios/axiosInstance";
import { useSelector } from "react-redux";
import TitleBlockEditor from "../../Elements/TextBlocks/TitleBlock/TitleBlockEditor";
import EditButton from "../../Elements/Buttons/EditButton";
import ArticlesDisplayBase from "../../Articles/Display/DisplayBase/ArticlesDisplayBase";
import BaseCarousel from "../../Elements/Base/BaseCarousel";
import EditDeleteButtonMenu from "../../Elements/Buttons/EditDeleteButtonMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: theme.palette.background.light,
    [theme.breakpoints.down("1100")]: {
      flexDirection: "column",
    },
  },
  cardroot: {},
  card: {
    maxWidth: 345,
    minWidth: 345,
    margin: 10,
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },
  cardContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.light,
    padding: 10,
    color: "#fafafa",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    color: "white",
    backgroundColor: theme.palette.background.light,
    maxWidth: 1400,
  },
}));

export default function LatestNews({ articlesData, block, setBlock }) {
  const [error, setError] = useState(null);
  const classes = useStyles();
  const [editing, setEditing] = useState(false);
  const auth = useSelector((state) => state.auth);
  const editmode = useSelector((state) => state.editmode);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const updateTitleBlock = (updateTitleBlock) => {
    setBlock(updateTitleBlock);
    setEditing(false);
  };

  if (error) {
    return (
      <Typography variant="body1" color="error">
        An error occurred while loading the articles.
      </Typography>
    );
  }

  return (
    <Grid container spacing={0} className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Grid item xs={12}>
          {!editing ? (
            <TitleBlock
              subtitle={block.subtitle}
              title={block.title}
              alignment={block.alignment}
              showDivider={block.show_divider}
              description={block.description}
            />
          ) : (
            <TitleBlockEditor
              titleBlock={block}
              onUpdate={updateTitleBlock}
              handleCancel={() => setEditing(!editing)}
            />
          )}
          {!editing && editmode.editMode ? (
            <>
              <EditDeleteButtonMenu
                editClick={() => setEditing(!editing)}
                hideDelete
                position="center"
                adminLink="titleblock"
                text="Title Block"
              />
            </>
          ) : null}
        </Grid>
        <Grid container spacing={0}>
          <ArticlesDisplayBase
            articles={articlesData}
            classSet="cards"
            carousel={isSmallScreen ? true : false}
          />
        </Grid>
      </Paper>
    </Grid>
  );
}
