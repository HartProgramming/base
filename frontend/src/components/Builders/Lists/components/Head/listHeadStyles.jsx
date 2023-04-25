import { makeStyles } from "@material-ui/core";

export const listHeadStyles = makeStyles((theme) => ({
    tableActions: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      marginTop: theme.spacing(2),
    },
    saveActions: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      flexDirection: 'column',
      padding: '5px'
    },
    saveButton: {
      padding: '5px',
      margin: '10px',
      border: '1px solid green'
    }
  }));
  