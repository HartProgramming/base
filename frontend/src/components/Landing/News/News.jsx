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
<<<<<<< HEAD
import AdvancedSnackbar from "../../Elements/Snackbars/Snackbar";
=======
import EditDeleteButtonMenu from "../../Elements/Buttons/EditDeleteButtonMenu";
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: theme.palette.background.light,
    paddingBottom: 40,
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
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null)
  const classes = useStyles();
  const [editing, setEditing] = useState(false);
  const auth = useSelector((state) => state.auth);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const updateTitleBlock = (updateTitleBlock) => {
    setBlock(updateTitleBlock);
    setEditing(false);
  };

<<<<<<< HEAD
  useEffect(() => {
    axiosInstance
      .get("/titleblock/news/")
      .then((response) => {
        setTitleBlock(response.data);
      })
      .catch((err) => {
        setError(err);
      });

    axiosInstance
      .get("/articles/highlighted/")
      .then((response) => {
        setArticlesData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const handleEdit = () => {
    setOpen(true)
    setMessage('Editing Mode')
    setEditing(!editing)
  }

  const handleClose =() => {
    setOpen(false)
    setMessage(null)
  }

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {[0, 1, 2].map((article) => (
          <Grid item key={article} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <h5>Loading</h5>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

=======
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
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
<<<<<<< HEAD
          {!editing && auth.is_superuser ? (
            <div style={{ marginTop: 20 }}>
              <EditButton
                onClick={handleEdit}
                editState={editing}
              />
            </div>
          ) : null}
=======
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
          {!editing ? (
            <TitleBlock
              subtitle={block.subtitle}
              title={block.title}
              alignment={block.alignment}
              showDivider={block.show_divider}
            />
          ) : (
            <TitleBlockEditor
              titleBlock={block}
              onUpdate={updateTitleBlock}
              handleCancel={() => setEditing(!editing)}
            />
          )}
          {!editing && auth.is_superuser ? (
            <>
              <EditDeleteButtonMenu
                editClick={() => setEditing(!editing)}
                hideDelete
                position="center"
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
        {open && 
          <AdvancedSnackbar open={open} message={message} onClose={handleClose} duration='4000' type='info' position="top-center" />
        }
      </Paper>
    </Grid>
  );
}
