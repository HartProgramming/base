import { makeStyles } from "@material-ui/core/styles";

const StoryTellerStyles1 = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: "center",
      color: theme.palette.text.secondary,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: '350px'
    },
    image: {
      height: 150,
      width: 150,
      marginBottom: theme.spacing(2),
    },
    imageScale: {
        height: '250px',
        scale: '3',
    },
    imageContainer: {
        display: 'flex',
        width: '100%',
        margin: 'auto',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    textContainer: {
        padding: theme.spacing(2),
        textAlign: 'left'
    },
    textLeft: {
        textAlign: 'left'
    },
    textCenter: {
        textAlign: 'center'
    }
  }));

  export {StoryTellerStyles1}