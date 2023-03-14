import React, { useEffect, useState } from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Tabs, Tab } from "@material-ui/core";
import AccordionQA from "./AccordionQA";
import axiosInstance from "../../../lib/Axios/axiosInstance";
import AdvancedSnackbar from "../../Elements/Snackbars/Snackbar";
import useSnack from "../../../hooks/useEditTitleSnack";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.light,
    color: "black",
    padding: theme.spacing(1),
    width: "100%",
  },
  containerLayout: {
    display: "flex",
    width: "100%",
    marginBottom: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerGrid: {
    display: "flex",
    maxWidth: 900,
    marginBottom: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.light,
    fontWeight: "700",
    fontFamily: "Poppins",
    textTransform: "uppercase",
    fontSize: "0.95rem",
    marginRight: 5,
    "&:focus": {
      color: theme.palette.background.light,
    },
    "&: .MuiTab-textColorInherit.Mui-selected": {
      color: theme.palette.background.light,
    },
  },
  tabsIndicator: {
    width: "100%",
    backgroundColor: theme.palette.background.light,
    borderBottom: `3px solid ${theme.palette.secondary.dark}`,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
    borderBottom: "1px solid black",
    paddingBottom: theme.spacing(1),
    textAlign: "left",
    color: "black",
  },
}));

const FAQAccordion = ({ setError }) => {
  const classes = useStyles();
  const [currentCategory, setCurrentCategory] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editing, setEditing] = useState(Array(faqs.length).fill(false));
  const [
    openSnack,
    messageSnack,
    typeSnack,
    laySnack,
    editModeSnack,
    cancelModeSnack,
    setCancelModeSnack,
    successModeSnack,
    setSuccessModeSnack,
    handleSnackOpen,
    handleSnackClose,
    onSnackCancel,
  ] = useSnack("top-center");

  const onUpdate = () => {
    axiosInstance
      .get("/faq/")
      .then((response) => {
        let updatedFaqData = {};
        response.data.forEach((faq) => {
          if (!updatedFaqData[faq.category]) {
            updatedFaqData[faq.category] = [faq];
            console.log('yes')
          } else {
            updatedFaqData[faq.category].push(faq);
            console.log('no')
          }
        });
        setFaqs(updatedFaqData);
        setCategories(Object.keys(updatedFaqData));
        setCurrentCategory(Object.keys(updatedFaqData)[0]);
        setEditing({});
        setSuccessModeSnack(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get("/faq/")
        .then((response) => {
          let updatedFaqData = {};
          response.data.forEach((faq) => {
            if (!updatedFaqData[faq.category]) {
              updatedFaqData[faq.category] = [faq];
            } else {
              updatedFaqData[faq.category].push(faq);
            }
          });
          setFaqs(updatedFaqData);
          setCategories(Object.keys(updatedFaqData));
          setCurrentCategory(Object.keys(updatedFaqData)[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setCurrentCategory(newValue);
    setEditing(Array(faqs.length).fill(false));
  };

  const handleCancel = (index) => {
    console.log('cancel')
    setCancelModeSnack(true);
    const newEditing = [...editing];
    newEditing[index] = false;
    setEditing(newEditing);
  };

  return (
    <>
      <div className={classes.containerLayout}>
        <Grid container spacing={0} className={classes.containerGrid}>
          <Paper elevation={0} className={classes.root}>
            <>
              <Typography variant="h3" className={classes.sectionTitle}>
                Frequently Asked Questions
              </Typography>
              <Tabs
                value={currentCategory}
                onChange={handleTabChange}
                classes={{ indicator: classes.tabsIndicator }}
              >
                {categories.map((category) => (
                  <Tab
                    label={category}
                    value={category}
                    classes={{ root: classes.tab }}
                  />
                ))}
              </Tabs>
              <Grid
                container
                spacing={0}
                style={{ marginTop: 5, width: "100%" }}
              >
                {faqs[currentCategory]
                  ? faqs[currentCategory].map((faq, index) => (
                      <Grid item xs={12}>
                        <AccordionQA
                          onUpdate={onUpdate}
                          faq={faq}
                          editing={editing[index]}
                          setEditing={() => {
                            const newEditing = Array(faqs.length).fill(false);
                            newEditing[index] = true;
                            setEditing(newEditing);
                          }}
                          handleCancel={() => handleCancel(index)}
                        />
                      </Grid>
                    ))
                  : null}
              </Grid>
            </>
          </Paper>
        </Grid>
        {successModeSnack && (
          <AdvancedSnackbar
            onClose={handleSnackClose}
            duration="3000"
            position={"top-center"}
            open={true}
            message={messageSnack}
            type={"success"}
          />
        )}
        {cancelModeSnack && (
          <AdvancedSnackbar
            onClose={handleSnackClose}
            duration="3000"
            position={'top-center'}
            open={true}
            message={'Updates Canceled'}
            type={'warning'}
          />
        )}
      </div>
    </>
  );
};

export default FAQAccordion;
