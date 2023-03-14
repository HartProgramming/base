import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useSelector } from "react-redux";
import SocialEdit from "./SocialEdit";
import { baseClasses } from "../../../classes";
import EditDeleteButtonMenu from "../../Elements/Buttons/EditDeleteButtonMenu";
import AdvancedSnackbar from "../../Elements/Snackbars/Snackbar";
const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(3),
  },
  socialIcons: {
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: theme.shadows[7],
      backgroundColor: theme.palette.primary.light,
    },
  },
  socialIcon: {
    "&:hover": {
      color: theme.palette.primary.gold,
    },
  },
  title: {
    fontWeight: 600,
    paddingTop: 30,
  },
  snack: {
    width: 100,
    border: '1px solid blue'
  }
}));

export default function Social({ contactData, showTitle, color = "light" }) {
  const classes = useStyles();
  const theme = useTheme();
  const { fadeIn } = baseClasses();
  const auth = useSelector((state) => state.auth);
  const [contacts, setContacts] = useState(contactData);
  const [editing, setEditing] = useState(false);
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState(null)
  let finalColor;

  if (color === "light") {
    finalColor = theme.palette.background.light;
  } else if (color === "dark") {
    finalColor = theme.palette.primary.main;
  }

  useEffect(() => {
    setContacts(contactData);
  }, [contactData]);

  const updateSocialData = (updateSocialData) => {
    setContacts(updateSocialData);
    setEditing(false);
  };

  const socialPlatforms = [
    {
      name: "facebook",
      icon: <FacebookIcon fontSize="large" className={classes.socialIcon} />,
    },
    {
      name: "twitter",
      icon: <TwitterIcon fontSize="large" className={classes.socialIcon} />,
    },
    {
      name: "instagram",
      icon: <InstagramIcon fontSize="large" className={classes.socialIcon} />,
    },
    {
      name: "linkedin",
      icon: <LinkedInIcon fontSize="large" className={classes.socialIcon} />,
    },
    {
      name: "youtube",
      icon: <YouTubeIcon fontSize="large" className={classes.socialIcon} />,
    },
    {
      name: "github",
      icon: <GitHubIcon fontSize="large" className={classes.socialIcon} />,
    },
  ];

  const handleEdit = () => {
    setEditing(!editing)
    setOpen(true)
    setMessage('Editing Mode')
    console.log('hi')
  }

  const handleClose = () => {
    setOpen(false)
    setMessage(null)
  }

  return (
    <>
      {!editing ? (
        <div
          className={`${fadeIn} ${classes.root}`}
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {showTitle && (
            <div>
              <Typography variant="h4" className={classes.title}>
                Follow Us
              </Typography>
            </div>
          )}
          <div>
            {socialPlatforms.map((platform) => {
              if (contacts[platform.name]) {
                return (
                  <IconButton
                    key={platform.name}
                    className={classes.socialIcons}
                    style={{ color: finalColor }}
                    aria-label={platform.name}
                    href={`https://www.${platform.name}.com/${
                      contacts[platform.name]
                    }`}
                  >
                    {platform.icon}
                  </IconButton>
                );
              } else {
                return null;
              }
            })}
          </div>
          {!editing && auth.is_superuser ? (
            <EditDeleteButtonMenu
              hideDelete
              editClick={handleEdit}
              position="center"
              placement="bottom"
              finalColor={finalColor}
            />
          ) : null}
        </div>
      ) : (
        <>
          <SocialEdit
            initialData={contacts}
            onUpdate={updateSocialData}
            handleCancel={() => setEditing(!editing)}
          />
          
        </>
      )}
      {open && 
      <AdvancedSnackbar open={open} message={message} onClose={handleClose} type='info' duration='4000' position='top-center'/>
      }
    </>
  );
}
