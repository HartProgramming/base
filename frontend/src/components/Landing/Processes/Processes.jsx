import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Button } from "@material-ui/core";
import TitleBlock from "../../Elements/TextBlocks/TitleBlock/TitleBlock";
import Process from "./Process";
import { useSelector } from "react-redux";
import axiosInstance from "../../../lib/Axios/axiosInstance";
import TitleBlockEditor from "../../Elements/TextBlocks/TitleBlock/TitleBlockEditor";
import EditButton from "../../Elements/Buttons/EditButton";
import BaseEditForm from "../../Elements/Base/EditForm/BaseEditForm";
<<<<<<< HEAD
import AdvancedSnackbar from "../../Elements/Snackbars/Snackbar";
=======
import EditDeleteButtonMenu from "../../Elements/Buttons/EditDeleteButtonMenu";
import Container from "../../Elements/Layout/Container/Container";
import Item from "../../Elements/Layout/Item/Item";

>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    // minHeight: 550,
    minWidth: 325,
    padding: 0,
    margin: 0,
    marginBottom: 40,
    backgroundColor: theme.palette.background.light,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    textAlign: "center",
    color: theme.palette.text.dark,
    backgroundColor: theme.palette.background.light,
    maxWidth: 1200,
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    minWidth: 350,
    marginTop: 10,
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Processes({
  block,
  setBlock,
  processData,
  showTitleBlock = true,
}) {
  const classes = useStyles();
  const [editTitle, setEditTitle] = useState(false);
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState(null)
  const auth = useSelector((state) => state.auth);

  const updateTitleBlock = (updateTitleBlock) => {
    setBlock(updateTitleBlock);
    setEditTitle(false);
  };

  const handleClose = () => {
    setOpen(false)
    setMessage(null)
  }

  const handleEdit = () => {
    setEditTitle(!editTitle)
    setOpen(true)
    setMessage('Editing Mode')
  }

  return (
    <Box className={classes.root}>
      <Container>
        <Item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            {showTitleBlock && (
              <>
                {!editTitle ? (
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
                    handleCancel={() => setEditTitle(!editTitle)}
                  />
                )}

                {!editTitle && auth.is_superuser ? (
                  <>
                    <EditDeleteButtonMenu
                      editClick={() => setEditTitle(!editTitle)}
                      hideDelete
                      position="center"
                    />
                  </>
                ) : null}
              </>
            )}
<<<<<<< HEAD
            {!editTitle && auth.is_superuser ? (
              <EditButton
                onClick={handleEdit}
                editState={editTitle}
              />
            ) : null}
            <Grid container spacing={2} className={classes.gridContainer}>
              {processes.map((step, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  className={classes.center}
                >
=======
            <Container style={{ marginTop: showTitleBlock ? 24 : 0 }}>
              {processData.map((step, index) => (
                <Item xs={12} sm={12} md={12} lg={4} xl={4} justify="center">
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
                  <Process step={step} />
                </Item>
              ))}
            </Container>
          </Paper>
<<<<<<< HEAD
        </Grid>
      </Grid>
      {open && 
        <AdvancedSnackbar onClose={handleClose} open={open} message={message} position='top-center' type='info' duration='4000' />
      }
=======
        </Item>
      </Container>
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
    </Box>
  );
}
