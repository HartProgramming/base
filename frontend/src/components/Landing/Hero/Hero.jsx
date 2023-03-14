import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import axiosInstance from "../../../lib/Axios/axiosInstance";
import ContactButtons from "../../Contact/Contact/ContactButtons";
import Social from "../../Contact/Social/Social";
<<<<<<< HEAD
import StyledButton from "../../Elements/Buttons/StyledButton";
import BaseForm from "../../Elements/Base/BaseForm";
import AdvancedSnackbar from "../../Elements/Snackbars/Snackbar";
=======
import HeroBlock from "../../Elements/TextBlocks/HeroBlock/HeroBlock";
import EditDeleteButtonMenu from "../../Elements/Buttons/EditDeleteButtonMenu";
import HeroBlockEdit from "../../Elements/TextBlocks/HeroBlock/HeroBlockEdit";
import HeroForm from "./HeroForm";
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69

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
<<<<<<< HEAD
  const [heroData, setHeroData] = useState({
    title: "",
    heading: "",
    text: "",
    buttonText: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get("/heroblock/main/")
        .then((response) => {
          setHeroData(response.data);
        })
        .catch((err) => {
          setError(err);
        });
    };
    fetchData();
  }, []);

  const [editHero, setEditHero] = useState(false);
  const [editCarousel, setEditCarousel] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
=======
  const [editing, setEditing] = useState(false);
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
  const auth = useSelector((state) => state.auth);

  const updateHeroBlock = (updatedHeroBlock) => {
    setHeroData(updatedHeroBlock);
<<<<<<< HEAD
    setEditHero(false);
  };

  const handleClose = () => {
    setOpen(false);
    setMessage(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
=======
    setEditing(false);
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
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
<<<<<<< HEAD
      {form ? (
        <BaseForm
          title="Ready to take the first step?"
          body="Fill out the form below and one of our experts will get in touch
        with you to schedule a consultation."
          handleSubmit={handleSubmit}
        >
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Full Name"
              variant="outlined"
              fullWidth
              className={classes.formField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Email"
              variant="outlined"
              fullWidth
              className={classes.formField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Phone"
              variant="outlined"
              fullWidth
              className={classes.formField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              className={classes.formField}
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <StyledButton onClick={handleClick} buttonText="Get in touch" />
          </Grid>
        </BaseForm>
      ) : null}
      {open && (
        <AdvancedSnackbar
          message={message}
          open={open}
          onClose={handleClose}
          type="success"
          duration="3500"
          position="top-center"
        />
      )}
=======
      {form ? <HeroForm /> : null}
>>>>>>> 6c5a6f19d25665b98ba02e21d3b29214c3aece69
    </Grid>
  );
}

export default Hero;
