import { makeStyles } from "@material-ui/core";

const MemberStyles1 = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      maxWidth: 860,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      marginTop: 20,
    },
    card: {
      maxWidth: 350,
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows[2],
      transition: "0.3s",
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: theme.shadows[7],
      },
    },
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    title: {
      color: "black",
      fontSize: "1.25rem",
      fontWeight: 600,
      marginBottom: 5,
    },
    subheader: {
      color: theme.palette.primary.dark,
      fontSize: "0.85rem",
      fontWeight: 600,
      fontFamily: "Poppins",
    },
  }));

  const MemberStyles2 = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      maxWidth: 860,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      marginTop: 20,
    },
    card: {
      maxWidth: 350,
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows[2],
      transition: "0.3s",
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: theme.shadows[7],
      },
    },
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    avatarContainer: {
        marginTop: theme.spacing(-3)
    },
    title: {
      color: "black",
      fontSize: "1.25rem",
      fontWeight: 600,
      marginBottom: 5,
    },
    subheader: {
      color: theme.palette.primary.dark,
      fontSize: "0.85rem",
      fontWeight: 600,
      fontFamily: "Poppins",
    },
    socialIcons: {
        marginTop: theme.spacing(0),
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
  }));

  const MemberStyles3 = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      maxWidth: 860,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      marginTop: 20,
      margin: theme.spacing(5)
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      maxWidth: 350,
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows[2],
      transition: "0.3s",
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: theme.shadows[7],
      },
    },
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    avatarContainer: {
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'flex-start',
        padding: theme.spacing(0.7)
    },
    title: {
      color: "black",
      fontSize: "1.25rem",
      fontWeight: 600,
      marginBottom: 5,
    },
    subheader: {
      color: theme.palette.primary.dark,
      fontSize: "0.85rem",
      fontWeight: 600,
      fontFamily: "Poppins",
    },
    socialIcons: {
        marginTop: theme.spacing(0),
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
  }));

  export {MemberStyles1, MemberStyles2, MemberStyles3}