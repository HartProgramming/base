import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import axiosInstance from "../../../lib/Axios/axiosInstance";
import ContactButtons from "../../Contact/Contact/ContactButtons";
import Social from "../../Contact/Social/Social";
import HeroBlock from "../../Elements/TextBlocks/HeroBlock/HeroBlock";
import EditDeleteButtonMenu from "../../Elements/Buttons/EditDeleteButtonMenu";
import HeroBlockEdit from "../../Elements/TextBlocks/HeroBlock/HeroBlockEdit";
import HeroForm from "./HeroForm";

const useStyles = makeStyles((theme) => ({
  overlay: {
    padding: 20,
    marginTop: 80,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: 60,
    },
  },
  container: {
    height: "100%",
    background: `url(https://source.unsplash.com/1400x900/?service) no-repeat center center fixed`,
    backgroundSize: "cover",
    maxWidth: "100%",
    minHeight: 700,
    borderRadius: theme.spacing(0),
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
  },
}));

function Hero({ heroData, setHeroData, contactData, form = true }) {
  const classes = useStyles();
  const [editing, setEditing] = useState(false);
  const auth = useSelector((state) => state.auth);

  const updateHeroBlock = (updatedHeroBlock) => {
    setHeroData(updatedHeroBlock);
    setEditing(false);
  };

  const handleClick = () => {
    setOpen(true);
    console.log("hi");
    setMessage("Message Sent");
  };

  return (
    <Grid container flex className={classes.container}>
      <Grid item xs={12}>
        <div className={classes.overlay}>
          {!editing && auth.is_superuser ? (
            <>
              <EditDeleteButtonMenu
                editClick={() => setEditing(!editing)}
                hideDelete
                placement="top"
                position="center"
                finalColor="white"
              />
            </>
          ) : null}
          {!editing ? (
            <HeroBlock
              title={heroData.title}
              heading={heroData.heading}
              text={heroData.text}
              btnText={heroData.buttonText}
            />
          ) : (
            <HeroBlockEdit
              heroBlock={heroData}
              onUpdate={updateHeroBlock}
              handleCancel={() => setEditing(!editing)}
            />
          )}

          <Grid item xs={12} md={12}>
            <ContactButtons contactData={contactData} />
            <Grid container flex justifyContent="center">
              <Social contactData={contactData} color="light" />
            </Grid>
          </Grid>
        </div>
      </Grid>
      {form ? <HeroForm /> : null}
    </Grid>
  );
}

export default Hero;
