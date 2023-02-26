import { makeStyles } from "@material-ui/core";

const AboutStyles1 = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "white",
    },
    section: {
      marginTop: theme.spacing(2),
      color: "black",
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 20,
      color: "white",
      backgroundColor: "white",
      borderRadius: 14,
      maxWidth: 900,
      minWidth: 300,
    },
  }));

  const AboutStyles2 = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "white",
    },
    section: {
      marginTop: theme.spacing(2),
      color: "black",
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 20,
      color: "white",
      backgroundColor: "white",
      borderRadius: 14,
      maxWidth: 900,
      minWidth: 300,
    },
    aboutRow: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            margin: 'auto',
            alignItems: 'center'
        }
    },
    image: {
        height: '200px',
        width: '300px',
        margin: theme.spacing(2)
    }
  }));

  export {AboutStyles1, AboutStyles2}