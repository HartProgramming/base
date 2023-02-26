import { makeStyles } from "@material-ui/core";

const MemberContentStyles1 = makeStyles((theme) => ({
    cardContent: {
      padding: "0px 16px 0px 16px",
    },
    socialIcons: {
      marginTop: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
    },
    iconButton: {
      padding: theme.spacing(1),
      color: theme.palette.primary.dark,
      "&:hover": {
        color: theme.palette.primary.gold,
      },
    },
    body: {
      padding: 0,
      color: "black",
      minHeight: 100,
    },
  }));

  const MemberContentStyles2 = makeStyles((theme) => ({
    cardContent: {
      marginTop: theme.spacing(.2)
    },
    socialIcons: {
      marginTop: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
    },
    iconButton: {
      padding: theme.spacing(1),
      color: theme.palette.primary.dark,
      "&:hover": {
        color: theme.palette.primary.gold,
      },
    },
    body: {
      padding: theme.spacing(1),
      color: "black",
      minHeight: 0,
    },
  }));

  const MemberContentStyles3 = makeStyles((theme) => ({
    cardContent: {
      marginTop: theme.spacing(.2)
    },
    socialIcons: {
      marginTop: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
    },
    iconButton: {
      padding: theme.spacing(1),
      color: theme.palette.primary.dark,
      "&:hover": {
        color: theme.palette.primary.gold,
      },
    },
    body: {
      padding: theme.spacing(0),
      color: "black",
      minHeight: 0,
    },
  }));


  export {MemberContentStyles1, MemberContentStyles2, MemberContentStyles3}